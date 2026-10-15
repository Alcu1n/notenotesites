#!/bin/zsh
set -eu
pinypiny_fixture_dir="${0:A:h}"
pinypiny_native_workdir="${PINYPINY_MEDIA_WORKDIR:-/tmp/pinypiny-native-media}"
pinypiny_app_build_dir="${PINYPINY_APP_BUILD_DIR:-/Users/alcuin/Library/Developer/Xcode/DerivedData/CardStack_UI-bcsbnbavbeukvnhftphqywdlkeox/Build/Products/Debug-iphonesimulator}"
pinypiny_developer_dir="$(xcode-select -p)"
pinypiny_simulator_sdk="$(xcrun --sdk iphonesimulator --show-sdk-path)"
test -d "$pinypiny_app_build_dir/CardStack_UIUITests-Runner.app"
test -d "$pinypiny_app_build_dir/CardStack_UI.app"
mkdir -p "$pinypiny_native_workdir"
ditto "$pinypiny_app_build_dir/CardStack_UIUITests-Runner.app" "$pinypiny_native_workdir/MediaRunner.app"
xcrun swiftc -emit-library -module-name CardStack_UIUITests -target arm64-apple-ios18.0-simulator \
  -sdk "$pinypiny_simulator_sdk" \
  -F "$pinypiny_developer_dir/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks" \
  -framework XCTest -Xlinker -rpath -Xlinker @loader_path/Frameworks \
  -o "$pinypiny_native_workdir/MediaRunner.app/PlugIns/CardStack_UIUITests.xctest/CardStack_UIUITests" \
  "$pinypiny_fixture_dir/native-demo.swift"
codesign --force --sign - "$pinypiny_native_workdir/MediaRunner.app/PlugIns/CardStack_UIUITests.xctest"
codesign --force --sign - "$pinypiny_native_workdir/MediaRunner.app"
python3 - "$pinypiny_native_workdir" "$pinypiny_app_build_dir" <<'PY'
from pathlib import Path
import plistlib,sys
workdir,builddir=map(Path,sys.argv[1:]);runner=workdir/'MediaRunner.app'
test={'TestBundlePath':str(runner/'PlugIns/CardStack_UIUITests.xctest'),'TestHostPath':str(runner),'TestHostBundleIdentifier':'com.shubham-iosdev.CardStack-UI.UITests.xctrunner','UITargetAppPath':str(builddir/'CardStack_UI.app'),'UITargetAppBundleIdentifier':'com.lraistudio.notenote','IsUITestBundle':True,'IsAppHostedTestBundle':True,'OnlyTestIdentifiers':['MediaTests/testNativePhotoToCardStackDemo'],'TestingEnvironmentVariables':{'DYLD_FRAMEWORK_PATH':'__PLATFORMS__/iPhoneSimulator.platform/Developer/Library/Frameworks','DYLD_LIBRARY_PATH':'__PLATFORMS__/iPhoneSimulator.platform/Developer/usr/lib'}}
(workdir/'media.xctestrun').write_bytes(plistlib.dumps({'MediaProbe':test,'__xctestrun_metadata__':{'FormatVersion':1}}))
print(workdir/'media.xctestrun')
PY
