"""SenderTimestamps remembers the sender radio's timestamp for reactions."""

from types import SimpleNamespace

from custom_components.meshcore_chat import SenderTimestamps


def _raw(kind: str, payload: dict) -> SimpleNamespace:
    return SimpleNamespace(data={"event_type": kind, "payload": payload})


def test_channel_message_keyed_by_body_and_full_text() -> None:
    st = SenderTimestamps()
    st.on_raw_event(_raw("EventType.CHANNEL_MSG_RECV", {"text": "Dave: Test", "sender_timestamp": 1700000000}))
    assert st.lookup("Test") == 1700000000
    assert st.lookup("Dave: Test") == 1700000000


def test_contact_message_and_other_events() -> None:
    st = SenderTimestamps()
    st.on_raw_event(_raw("EventType.CONTACT_MSG_RECV", {"text": "hi", "sender_timestamp": 5}))
    st.on_raw_event(_raw("EventType.ADVERTISEMENT", {"text": "x", "sender_timestamp": 9}))
    assert st.lookup("hi") == 5
    assert st.lookup("x") is None


def test_bounded() -> None:
    st = SenderTimestamps()
    for i in range(SenderTimestamps.MAX + 10):
        st.on_raw_event(_raw("CONTACT_MSG_RECV", {"text": f"m{i}", "sender_timestamp": i}))
    assert st.lookup("m0") is None
    assert st.lookup(f"m{SenderTimestamps.MAX + 9}") == SenderTimestamps.MAX + 9
