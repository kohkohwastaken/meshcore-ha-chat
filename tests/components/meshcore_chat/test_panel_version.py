"""The panel's module URL changes with the bundle, so phone apps reload it."""

from custom_components.meshcore_chat import panel


def test_bundle_version_is_stable_hash() -> None:
    v = panel._bundle_version()
    assert len(v) == 12
    assert v == panel._bundle_version()


def test_bundle_version_missing_file(monkeypatch) -> None:
    monkeypatch.setattr(panel, "PANEL_FRONTEND_PATH", "/nonexistent/x.js")
    assert panel._bundle_version() == "0"
