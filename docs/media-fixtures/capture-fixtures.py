import sqlite3,json,uuid,shutil,sys,hashlib,subprocess
from pathlib import Path
variant=sys.argv[1]
device=sys.argv[2] if len(sys.argv)>2 else '41C66100-D627-4C4F-A1F3-6BC7A2C28717'
site=Path('/Users/alcuin/Coding/NoteNote/NoteSites/public/assets/pinypiny/showcase')
app=Path('/Users/alcuin/Coding/NoteNote/CardStack_UI/CardStack_UI/iOS/Resources/Assets.xcassets/CreativeIntro')
container=Path(subprocess.check_output(['xcrun','simctl','get_app_container',device,'com.lraistudio.notenote','data'],text=True).strip())
support=container/'Library/Application Support'
assetroot=support/'PinniaCloudSync/local-only/assets'
for folder in ['Photos','Stickers']:(assetroot/folder).mkdir(exist_ok=True,parents=True)
sources={
 'coast':(app/'CreativeCoast.imageset/photo.jpg','Photos/showcase-coast.jpg',900,598,'photo'),
 'coast-polaroid':(app/'CreativeCoast-polaroid.imageset/photo.png','Photos/showcase-coast-polaroid.png',700,567,'photo'),
 'lemon':(app/'CreativeLemon-cutout.imageset/photo.png','Stickers/showcase-lemon.png',700,700,'sticker')
}
for key,(src,dst,w,h,kind) in sources.items(): shutil.copyfile(src,assetroot/dst)
assets=[];objs=[]
def uid():return str(uuid.uuid4()).upper()
def text(value,x,y,w=336,size=20,font='system.sans',ink='graphite',bold=False,rotation=0,highlight=None):
 style=dict(fontToken=font,pointSize=size,isBold=bold,isItalic=False,foregroundToken=ink,highlightIntensity=0.34,isUnderlined=False,isStruckThrough=False)
 if highlight:style['highlightToken']=highlight
 obj=dict(id=uid(),frame=dict(x=x,y=y,width=w),zIndex=10,payload={'richText':{'_0':dict(paragraphs=[dict(kind='body',alignment='left',runs=[{'text':{'_0':dict(text=value,style=style)}}])],rotationDegrees=rotation)}})
 objs.append(obj);return obj['id']
def photo(key,x,y,w,rotation=0):
 src,path,pw,ph,kind=sources[key];aid=uid();assets.append(dict(id=aid,kind=kind,assetPath=path,renderPath=path,thumbnailPath=path,pixelWidth=pw,pixelHeight=ph))
 embed=dict(assetID=aid,typeIdentifier='com.cardstack.embed.image',rotationDegrees=rotation,cropScale=1,cropOffsetX=0,cropOffsetY=0,cropRotationDegrees=0,altText='Colorful houses by the Ligurian coast' if key.startswith('coast') else 'Lemon photo cutout')
 if key=='lemon':embed.update(stickerHasCutout=True,stickerWhiteBorder=True,stickerShadow=True)
 if key=='coast-polaroid':embed.update(photoPresentationStyleRawValue='polaroid',photoSourceRenderPath=sources['coast'][1],photoSourceThumbnailPath=sources['coast'][1])
 objs.append(dict(id=uid(),frame=dict(x=x,y=y,width=w),zIndex=5 if kind=='photo' else 12,payload={'floatingEmbed':{'_0':embed}}))
if variant=='minimal':
 title=text('Slow days.',27,112,size=40,font='bundled.instrument-serif')
 photo('coast',27,350,336)
 text('A little sea air. A little room to breathe.',27,500,size=19,font='bundled.instrument-serif')
 text('LIGURIAN COAST  /  A MOMENT TO KEEP',27,575,size=11,font='system.sans',ink='teal')
elif variant=='journal':
 title=text('Dear seaside,',27,112,size=40,font='bundled.instrument-serif')
 photo('coast',27,320,336)
 text('Nowhere to hurry.',27,450,size=26,font='bundled.instrument-serif',ink='teal')
 text('Pastel houses, salt in the air, and a slow walk along the water. I want to remember how the afternoon felt.',27,525,size=19,font='bundled.instrument-serif')
 text('One photo. One small memory.',27,680,size=15,font='system.sans',ink='ochre')
elif variant in ('collage','demo'):
 title=text('Seaside stories.',27,112,size=38,font='bundled.instrument-serif')
 photo('coast-polaroid',35,370,300,-5)
 text('TAKE THE SCENIC ROUTE',32,565,w=320,size=17,font='system.sans',bold=True,ink='teal',rotation=-3,highlight='yellow')
 text('warm light\nsalty air\nslow days',65,625,w=230,size=24,font='bundled.instrument-serif',ink='teal')
 photo('lemon',265,470,88,14)
else:raise ValueError(variant)
if variant=='demo':
 removed={a['id'] for a in assets if a['kind']=='photo'}
 objs=[o for o in objs if o['payload'].get('floatingEmbed',{}).get('_0',{}).get('assetID') not in removed]
 assets=[a for a in assets if a['id'] not in removed]
doc=dict(schemaVersion=4,defaultLayoutRevision=1,canvas=dict(logicalWidth=390,minimumHeight=980),titleObjectID=title,readingOrder=[o['id'] for o in objs],objects=objs,assets=assets)
fixtureout=Path('/Users/alcuin/Coding/NoteNote/NoteSites/docs/media-fixtures')
fixtureout.mkdir(exist_ok=True,parents=True)
(fixtureout/f'{variant}.json').write_text(json.dumps(doc,ensure_ascii=False,indent=2))
c=sqlite3.connect(support/'CardStackUITestStore/local-only/CardStackUITests.store')
if c.execute('select count(*) from ZNOTE').fetchone()[0] != 1: raise RuntimeError('Expected exactly one isolated UI-test note; initialize the test store first.')
c.execute('update ZNOTE set ZDOCUMENTDATA=?, ZTITLE=?, ZSEARCHABLETEXT=?, ZDOCUMENTREVISION=ZDOCUMENTREVISION+1,ZDOCUMENTTHUMBNAILREVISION=-1,ZDOCUMENTTHUMBNAILPATH="",ZSHOWSDATE=1,ZSHOWSLOCATION=0,ZPAPERSTYLERAWVALUE="plain",ZPAPERTEXTURERAWVALUE="monken"',(json.dumps(doc,ensure_ascii=False,separators=(',',':')).encode(),variant,variant))
c.commit();print('Seeded',variant,'source SHA256',hashlib.sha256(sources['coast'][0].read_bytes()).hexdigest())
