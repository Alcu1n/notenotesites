import XCTest

@MainActor
final class MediaTests: XCTestCase {
    func testNativePhotoToCardStackDemo() throws {
        let app = XCUIApplication(bundleIdentifier: "com.lraistudio.notenote")
        app.activate()
        guard app.otherElements["cardstack.editor.fullscreen"].waitForExistence(timeout: 20) else { throw NSError(domain:"MediaFixture",code:1) }
        print("MEDIA_DEMO_START")
        Thread.sleep(forTimeInterval: 0.5)
        app.buttons["cardstack.editor.add"].tap()
        Thread.sleep(forTimeInterval: 0.8)
        app.buttons["cardstack.editor.add.photo"].tap()
        guard app.buttons["cardstack.editor.photo.floating"].firstMatch.waitForExistence(timeout: 4) else { throw NSError(domain:"MediaFixture",code:2) }
        app.buttons["cardstack.editor.photo.floating"].firstMatch.tap()
        let coast = app.images.matching(identifier: "PXGGridLayout-Info").matching(NSPredicate(format: "label CONTAINS %@", "9月05日")).firstMatch
        guard coast.waitForExistence(timeout: 15) else { throw NSError(domain:"MediaFixture",code:3) }
        Thread.sleep(forTimeInterval: 0.5)
        coast.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: 0.5)).tap()
        let style = app.buttons.matching(NSPredicate(format: "identifier BEGINSWITH %@ AND NOT identifier CONTAINS %@", "cardstack.media.style.", ".option.")).firstMatch
        guard style.waitForExistence(timeout: 10) else { throw NSError(domain:"MediaFixture",code:4) }
        let mediaID = String(style.identifier.dropFirst("cardstack.media.style.".count))
        style.tap()
        let polaroid = app.buttons["cardstack.media.style.option.polaroid"].firstMatch
        guard polaroid.waitForExistence(timeout: 4) else { throw NSError(domain:"MediaFixture",code:5) }
        polaroid.tap()
        Thread.sleep(forTimeInterval: 1.0)
        let resize = app.otherElements["cardstack.media.resize." + mediaID].firstMatch
        let knob = resize.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: 0.5))
        knob.press(forDuration: 0.2, thenDragTo: knob.withOffset(CGVector(dx: 38, dy: 30)))
        _ = app.screenshot()
        Thread.sleep(forTimeInterval: 0.6)
        let photo = app.otherElements["cardstack.media." + mediaID].images.firstMatch
        let destination = app.coordinate(withNormalizedOffset: CGVector(dx: 0.48, dy: 0.48))
        photo.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: 0.5)).press(forDuration: 0.25, thenDragTo: destination)
        Thread.sleep(forTimeInterval: 0.8)
        app.coordinate(withNormalizedOffset: CGVector(dx: 0.94, dy: 0.20)).tap()
        let finished = XCTAttachment(screenshot: app.screenshot()); finished.name = "demo-finished-native-page"; finished.lifetime = .keepAlways; add(finished)
        Thread.sleep(forTimeInterval: 1.0)
        let sticker = app.otherElements.matching(NSPredicate(format: "identifier BEGINSWITH %@ AND label == %@", "cardstack.media.", "Sticker")).firstMatch
        sticker.tap()
        Thread.sleep(forTimeInterval: 0.5)
        let selected = XCTAttachment(screenshot: app.screenshot()); selected.name = "demo-native-sticker-selected"; selected.lifetime = .keepAlways; add(selected)
        app.coordinate(withNormalizedOffset: CGVector(dx: 0.94, dy: 0.20)).tap()
        app.buttons["cardstack.editor.paper-menu"].firstMatch.tap()
        let finish = app.buttons["cardstack.editor.finish"].firstMatch
        guard finish.waitForExistence(timeout: 4) else { throw NSError(domain:"MediaFixture",code:6) }
        finish.tap()
        Thread.sleep(forTimeInterval: 2)
        guard !app.otherElements["cardstack.editor.fullscreen"].exists else { throw NSError(domain:"MediaFixture",code:7) }
        print("MEDIA_DEMO_END")
    }
}
