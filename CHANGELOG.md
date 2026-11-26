# Changelog

All notable changes to **MeshCore Chat for Home Assistant** are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) loosely; entries are most-recent-first.

## 0.4.13-beta.2

- Rooms: one login per check. With a saved password it sends just that; without, it tries no password. A login that gets no reply over the direct route is retried once by flood. Before, a check could send up to three logins and run into the core integration's sending limit, which showed as a failed login.
- Rooms: if the core integration's sending limit is reached, the room says so ("try again in 20 seconds") instead of "Couldn't log in", and doesn't count it as a failure.
- Rooms: a failed login lists what was tried ("saved password (direct) – no reply; saved password (flood) – no reply").
- Rooms: the status says "Last logged in 4h ago · read-write · last post 2h ago" instead of "Logged in", since it isn't a live connection.

## 0.4.13-beta.1

### Rooms
- Rooms (room servers) have their own **Rooms** section in the chat list.
- Opening a room logs you in and catches you up on posts you missed: blank password first (works while the room still knows you), then your saved password, then it asks. Logins that get no reply over a direct route are retried once by flood. Passwords up to 15 characters; saved passwords stay on the Home Assistant server and are never sent to the panel.
- Each room post shows its real author (from the key prefix the room attaches), and is dated by when it was posted.
- Shows your access: read-write, admin or read-only. Read-only disables the message box and explains why.
- No background traffic: **⟳ Check for new posts** logs in again when you want an update.
- Detects when the room re-sends posts because it can't hear your radio's replies: "Posts may be delayed", then "Posts paused" with a prompt to check. Re-sent posts are stored once.
- Room posts are limited to 150 characters, like the official app.

## 0.4.12

A big redesign of the panel. Everything below is detailed in the 0.4.12 betas that follow.

- **New layout:** five tabs (Chat, Nodes, My radio, Repeaters, Settings), a bottom tab bar on phones, a new sidebar icon and header logo.
- **Chat:** separate, collapsible Channels and Direct messages sections with previews; delete a message or a whole conversation; message hashes next to the hop count.
- **Reactions** in the MeshCore One format, readable by other apps, with any emoji; reactions from MeshCore Open and plain `@[Name] 👍` messages are understood too. A header toggle shows the raw reaction messages.
- **Replies** quote the message they answer when it's clear which one; you can only reply to someone's newest message.
- **Contacts:** a new Contacts window (grouped contacts, discovered nodes 500 at a time, sorting), add a contact manually from a chat code, link, QR text or public key with an Unverified badge until they're heard, and share contacts as a QR code, code, link or over the air.
- **Nodes:** map or list, selected-pin highlight, details beside the map, multi-type and heard-within filters (including 1 year and a custom date), and a Clear stale dialog by days, type and source.
- **Repeaters:** card list, Refresh status with the time of the last status, and Manage devices.
- **Settings tab** for message, reaction, date/time and node preferences, saved per browser.
- Many fixes for phones, layout and the map.

## 0.4.12-beta.38

- Header logo on one line (bubble, MESHCORE, HOME ASSISTANT CHAT), with HOME ASSISTANT CHAT large enough to read.

## 0.4.12-beta.37

- The panel header shows the MeshCore Chat logo instead of the plain "MeshCore Chat" title, at the same size.

## 0.4.12-beta.36

- New sidebar icon: a speech bubble with "MC HAC" in MeshCore-style lettering, instead of the walkie-talkie. It follows your theme's icon colours.
- New README banner with the same logo.

## 0.4.12-beta.35

- Repeaters: device cards and Manage devices are laid out in a row again (icon, name and details, status, ›) instead of stacked in the middle of a wide card.

## 0.4.12-beta.34

- Nodes: Clear stale is now a proper dialog. Any number of days (no 365 limit), tick which types (companions, repeaters, room servers, sensors) and which kinds (discovered, manually added, or both). It shows how many will be removed before you confirm.
- Nodes: the type filter lets you pick one, several or all types, for both the map and the list.
- Nodes: "Heard" filter adds 1 year and a custom "since a date" picker (also in Settings).

## 0.4.12-beta.33

- **Chat:** each message shows its **hash** (the MeshCore One id reactions use) after the hop count, for example `· #272jvvz7`. The message details show it too. For your own sent messages the exact send second isn't recorded, so the hash is an estimate and is marked `≈` / "(estimated)".
- **Contacts:** the **Unverified** badge clears the moment an advert or direct message arrives from that contact. It no longer waits until the next time you open the panel.
- **Contacts:** if adding a contact by hand fails, the stand-in entry is removed from the MeshCore integration's discovered list, and it isn't marked Unverified.

## 0.4.12-beta.32

### Reactions
- Reactions are always sent in **MeshCore One** format, which the MeshCore app developers have agreed to use until MeshCore supports reactions itself. The MeshCore Open and Plain sending options are gone. Settings → Reactions links to the [MeshCore One reactions guide](https://github.com/Avi0n/MeshCoreOne/blob/main/docs/Reactions.md). Reactions in other formats are still read.
- A reaction that arrives **before its message** (mesh routes differ) now attaches once the message turns up, instead of being lost. With the 😊 toggle on, it shows as "Name reacted 👍 · message not received yet" until then. New setting: **Show reactions to messages that haven't arrived**.
- New setting for channel messages that are just **@[Name] + one emoji**: Show as a message (default), Treat as a reaction, or Both.
- Quotes of reactions are worked out once and remembered, so busy chats scroll smoothly.

### Replies
- A reply only shows a quote when the guess can't really be wrong: exactly one message from that person among the previous 10, sent within 30 minutes. Otherwise there's no quote, as wadamesh does. Your own replies still always quote the exact message you picked.

### Contacts
- Contacts added from a code, link or key are marked **Unverified**, in Contacts, the chat list and the Nodes list. The mark clears when an advert or a direct message arrives from that key, because both prove the key's owner. Contacts added from an advert are trusted straight away.
- **Sensors** appear as their own group in Contacts and are counted on the Discovered tab (no Message button).
- "Recently heard" and "Longest ago" sort by each node's last advert on both tabs, and on the Nodes tab. Advert times far in the future (a firmware quirk) count as unknown and sort last.

### Chat list
- The Direct messages section shows **Loading…** until conversations have loaded. If loading fails, it says so, with **Retry** and **Show all contacts**, instead of an empty list. A brand-new radio with no conversations still shows "No conversations yet".

### Other
- The "Delete this reaction?" and "Couldn't delete" pop-ups use the panel's own dialogs instead of the browser's.
- Nodes map: the selected pin's ring is re-applied after the map moves or zooms, instead of every second.

## 0.4.12-beta.31

- **Chat:** removed **Contacts** from the ⋯ menu in direct messages.
- **Chat (phones):** **Delete chat** / **Clear chat history** now shows its confirmation popup when a conversation is open on a phone. Before, the popup only appeared on desktop, so on phones the option did nothing.

## 0.4.12-beta.30

- **Contacts → ＋ Add manually:** add someone your radio hasn't heard by pasting any of:
  - a **contact code** `<public key:type:name>`;
  - a **link** `meshcore://contact/add?…`;
  - a signed **advert** `meshcore://…` (the radio checks it and adds the contact, with its location);
  - a bare **64-character public key** (you give the name and type).

  The panel recognises what you pasted and shows what it found. Name and type can be edited before adding. Contacts added from a code, link or key go through the same path as **Add**, so the MeshCore integration creates their entity as usual.

## 0.4.12-beta.29

- **Repeaters:** a **⟳ Refresh status** button on every repeater, always available. It logs in if needed and asks the repeater for its current stats. It replaces "Log in and refresh", which only showed when stats were blank.
- **Repeaters:** a **Last status** line with the date and time (and how long ago) the repeater's stats last came in.

## 0.4.12-beta.28

- **Chat:** **React** is hidden on your own **unheard or failed** messages, with a note explaining why. Others may not have the message, so a reaction would have nothing to attach to. Resend or Delete instead. Reply was already hidden on your own messages.

## 0.4.12-beta.27

- **Nodes map:** the node details panel grows to fit its contents, so there's no scrollbar. It only scrolls if the map itself is shorter than the details.

## 0.4.12-beta.26

- **Nodes map:** fixed every pin jumping to the top left when a node was selected. The selected pin is now marked with a thick white ring and glow, drawn on top. Its size and position are left alone.
- **Nodes map:** the node details panel sits at the bottom left again, and is smaller.

## 0.4.12-beta.25

- **Nodes map:** the selected node's pin is bigger, with a white ring, and drawn on top of the others, so you can see which one the card is about.
- **Nodes map:** clicking a node opens its **full details** in a panel on the map instead of the small card. On desktop it's a column down the right; on phones it's the bottom half. The rest of the map stays visible and usable, and ✕ closes it.

## 0.4.12-beta.24

- **Chat:** delete your own **unheard or failed** messages. Tap the message, then **Delete** (next to Resend) and confirm. Unheard reactions get a **Delete** link on their "You reacted…" line. This removes the message from Home Assistant only, not from anyone who did receive it.

## 0.4.12-beta.23

- **Chat:** a **reactions toggle** (😊) in the conversation header shows reaction messages exactly as they were sent. Reactions still also appear as chips. It's a quick toggle, not a saved setting.
- **Settings → Reactions:** choose how you **send reactions**:
  - **MeshCore One** (default): SHA-256 hash, the exact message.
  - **MeshCore Open**: the short `r:hash:emoji` form.
  - **Plain**: `@[Name] 👍`, no hash, so it goes on their latest message.

  Each option shows its format and formula. Every format is understood when receiving, including plain `@[Name] 👍` on channels.
- **Chat:** **Reply** works only on a person's **newest** message. Replies don't say which message they answer, so other apps (MeshCore Open included) show them against the person's latest message. On older messages Reply is greyed out, and tapping it explains why.

## 0.4.12-beta.22

- **Chat:** a reply to a **reaction** now shows what was reacted to, for example "👍 reacted to SWALE-HV4: I'm considering pointing a beam…", instead of the raw reaction code. Tapping the quote jumps to that message. Reactions are hidden from the chat and shown as chips, so the old quote pointed at a message you couldn't find.

## 0.4.12-beta.21

- **Share window:** **Copy image** puts the QR code on the clipboard as a picture, ready to paste into another app. **Save image** downloads it as a PNG. Where a browser can't copy images, Copy image saves the picture instead.

## 0.4.12-beta.20

- **Contacts:** "Copy my contact" is **Share my contact** again. It now opens a **Share** window, as does **Share** in each contact's details:
  - a **QR code** to scan with a MeshCore app;
  - the **chat code**, which shows as a contact card when pasted into a chat on its own (Copy);
  - the **link** (`meshcore://contact/add?…`), which opens a MeshCore app to add the contact (Copy);
  - **Send to nearby radios**, which sends the advert once to radios in direct range, with no repeats.

## 0.4.12-beta.19

- **Contacts:** the sort menu now has **A–Z, Z–A, Recently heard and Longest ago**, on both the Contacts and Discovered tabs. Discovered is sorted on the server, so the order holds across every batch as you scroll.

## 0.4.12-beta.18

- **Contacts → Discovered:** loads 500 nodes at a time instead of 100.

## 0.4.12-beta.17

- **Contacts → Discovered:** no 500-node limit. The list loads in batches and fetches more as you scroll, with a **Load more** button as a fallback. The tab shows the full count.

## 0.4.12-beta.16

- **Contacts:** **Heard nearby** is now **Discovered**: every node your radio knows that isn't a contact, newest first, with no time filter.
- **Contacts:** "People" is now **Companions**. The Companions, Room servers and Repeaters headings collapse, and this browser remembers which are collapsed.
- **Contacts:** "Share my contact" is now **Copy my contact**, and "Share" is now **Copy contact**. Both copy the contact code.

## 0.4.12-beta.15

- **Contacts** is redesigned as a popup (full screen on phones):
  - Your own card at the top with **Share my contact**.
  - **Contacts** and **Heard nearby** tabs, each with a count.
  - Contacts are grouped into People, Room servers and Repeaters, sorted A–Z or by recently heard. Each row shows when they were last heard, the route and the distance, with 📍 if they've shared a location. 💬 opens the chat.
  - Heard nearby is filtered by how recently each node was heard, and has an **Add** button. Adding no longer opens a chat.
  - Tap anyone for details: Message (or Add), Show on map, Trace route, Share, their key, and Remove from radio (with a confirmation).
- The ＋ next to **Direct messages** is gone, because the Contacts pill does the same job.

## 0.4.12-beta.14

- **Chat list:** the **Contacts** pill sits on the **Direct messages** heading, next to its ＋. The channels gear sits on the **Channels** heading, next to its ＋.

## 0.4.12-beta.13

- **Chat (desktop):** direct messages show again. The desktop chat list never received the last-message previews (only the phone layout did), so every conversation looked empty. That hid them, and the previews and times were missing too.

## 0.4.12-beta.12

- **Chat:** the contacts button is now a labelled **Contacts** pill.
- **Chat:** Direct messages only lists conversations that have messages. Searching still finds every contact.
- **Chat:** the ⋯ in a conversation header has **Delete chat** (direct messages) or **Clear chat history** (channels), with a confirmation. This removes the stored messages from Home Assistant. The contact or channel stays.

## 0.4.12-beta.11

- **Chat:** a **Contacts** button next to the gear (and the ＋ by Direct messages) opens a **Contacts** panel:
  - **Your contacts**: tap one to message. ⋯ has Show on map (when it has a location), Trace route, Share contact (copies its contact code) and Remove from radio.
  - **Heard nearby**: **Add**, or **Message** to add and start a chat.
  - Search by name or key.
- **Chat:** the gear now only manages channels. Its contacts section has moved into the Contacts panel.

## 0.4.12-beta.10

- **Chat:** the ＋ next to **Direct messages** opens a **New message** picker. Choose one of your contacts, or a node heard nearby. Choosing a node you haven't added adds it to your radio and opens the chat. Search works by name or key.
- **Chat:** the ＋ next to **Channels** goes straight to channel management.
- **Chat:** **Show on map** is greyed out, with "(no location shared)", for contacts that haven't included a position in their adverts.

## 0.4.12-beta.9

- **Repeaters:** after logging in, **Log in and refresh** now asks the repeater for its status through the MeshCore integration, so battery, signal and traffic actually update.

## 0.4.12-beta.8

- **Phone app:** removed the empty strip under the bottom tab bar. The bar was adding the Android navigation bar's height as padding, even though the app already stops above it. It now uses Home Assistant's own safe-area value.

## 0.4.12-beta.7

- **Phone app:** the panel now measures the visible space and sizes itself to fit, so the bottom tab bar can't be scrolled up any more. CSS screen-height units were still too tall in the app.

## 0.4.12-beta.6

- **Chat list:** tap **Channels** or **Direct messages** to collapse that section. A collapsed section shows its unread count, or how many conversations it holds when nothing is unread. This browser remembers which sections are collapsed.

## 0.4.12-beta.5

- **Phone app:** the bottom tab bar no longer scrolls up and leaves an empty space below it. The panel now uses the screen's visible height.
- **Settings:** the page scrolls, so you can reach the bottom.

## 0.4.12-beta.4

- **My radio:** the page now has the same gap at the top as the other tabs. The General and Location cards are now as wide as the cards above and below them (the same fix applies on Repeaters).
- **My radio:** the Danger zone is gone. Rename Device has moved into the settings cog, next to Key Management and Reboot.

## 0.4.12-beta.3

- The Map tab is called **Nodes** again. A **Map | List** switch picks the view, and Map is the default.
- The "Heard" filter now applies to the list view too.
- Settings → Map is now Settings → Nodes.

## 0.4.12-beta.2

- **Repeaters:** a list of cards (status and when each was last heard). Tap one to open its page, with "‹ All devices" to go back. A **Manage devices** card opens the integration's options. When a repeater has no stats, **Log in and refresh** uses its saved password to ask for fresh status.
- **Map:** on desktop, a list of nodes sits beside the map. Clicking one centres the map on it. Clicking a node opens a small card with Message, Trace, Add and Details.
- **Map:** a "Heard" filter (any time, 24 hours, 7 days, 30 days) in the toolbar. Set its default in Settings → Map.
- **Chat:** a ⋯ menu in the conversation header. For channels: edit the channel and its region scope. For direct messages: Show on map, Trace route and Manage contacts. Both have Search.
- **My radio:** **Share my contact** shows a contact code and a link others can use to add you. A **Command…** button was also added.

## 0.4.12-beta.1

### New layout
- Five tabs, each with one job: **Chat**, **Map** (was Nodes), **My radio** (your companion radio's status, actions and settings), **Repeaters** (was Devices) and **Settings** (this panel's own preferences).
- On phones the tabs move to a bottom bar with icons. The Chat tab shows your total unread count.
- The panel remembers which tab you were on while the browser tab stays open.

### Chat list
- Separate **Channels** and **Direct messages** sections, with a search box and All / Unread.
- Each conversation shows its last message and how long ago it was sent ("Dave: anyone hearing Winterfield? · 2m"). Reactions, locations and contacts are summarised.
- Direct messages are sorted by most recent.
- Repeaters and room servers only appear once you've messaged them (searching still finds them).

### My radio
- Radio settings (frequency, bandwidth, spreading factor, coding rate, TX power, path hash) are behind an **Advanced radio settings** expander with a warning.
- Message, time and date preferences moved to the new Settings tab.

### Repeaters
- Flood advert, Sync clock and a new Command… button sit at the top of each repeater.
- When a repeater hasn't answered, a note explains why its stats are blank instead of showing dashes.

### Map
- One toolbar: search, which nodes (All / Added / Discovered), type, sort, and a ⋯ menu for Sync and Clear stale.

## 0.4.11

### Message menu
- Tapping a message opens a bottom sheet on phones and a panel beside the chat on desktop, with the same layout:
  - who sent it and the message;
  - Received date and time, then hops · SNR · RSSI (and, for your own messages, how many repeaters responded);
  - Reply / React / Copy / Message (and Route on phones). React opens the reaction buttons, so a stray tap can't send a reaction;
  - the message's reactions, Resend for your own unheard or failed messages, and the route map.
- No "time since" in the panel and no Details section: everything is shown.

### Added
- Shared locations show on a map in the chat, with a red drop pin, that you can drag and zoom. The expand button opens a large map with re-centre and "open in maps app" (your phone's maps app on phones, OpenStreetMap elsewhere). The send confirmation shows the map too.
- Route map: a "Larger map" button opens it big over the page (Esc or tap outside to close). The old ⤢ button is now a re-centre icon, as that's what it does.
- Your "You reacted…" line shows the reaction's delivery state (Repeated, Unheard…), with Resend when it wasn't heard. A resent reaction updates the same line.
- Received messages show their hop count next to the time ("5m · 7 hops").
- Settings → Messages: choose Message times (time since, clock time, or date and time), Clock (system default, 12 or 24 hour) and Date (system default, 24 Nov 2026, 24/11/2026, 11/24/2026 or 2026-11-24). Clock time adds the date for older days. Used under messages, in the message details and in search. Saved in this browser.

### Fixed
- Tapping the route no longer closes the message menu.
- Large location and route maps fill the whole box instead of only the top part.
- Dragging a location map in a message no longer fades the message.
- The + and emoji menus close when you tap or click anywhere outside them.
- Hovering the route map (markers and the dots on the line) shows the repeater name ("Tea-913") instead of a time.

## 0.4.10

### Fixed
- The Home Assistant phone apps kept running an old cached copy of the panel after updates. The panel's address now changes with each build, so apps load the new version after a restart.

### Contacts
- Share contact no longer sends straight away. The contact is attached to the box, like a location, so you can add a message and send when ready.
- Contacts sent with a message show as the message plus a contact card. A note explains that the MeshCore phone apps only show a card for a contact sent on its own.

### Reactions
- React with any emoji: ＋ after the quick reactions opens the emoji picker.
- Reactions you send leave a small line in the chat ("You reacted 👍 to Dave: “Test”"). Tap it to jump to the message. Other people's reactions don't add lines, to keep busy channels tidy.
- Message dialog: reactions show as a row of counts (👍 8 · 🔥 3 · 12 reactions). Tap one to see who sent it and when, newest first; long lists show 5 until "Show all". Your own reaction is outlined.

### Emoji picker
- Search by name or keyword ("thumbs", "radio", "red heart"); Enter picks the first result.
- The full Unicode set in its usual groups, after your recent emoji.
- Fits narrow phone screens: the picker widens the message dialog, the grid sizes its columns to the space, and it scrolls by touch. Names from unicode-emoji-json and keywords from emojilib (both MIT).

## 0.4.9

- Share location: tapping a device now shows it on the map first, with when it last updated and its accuracy. Choose "Use this location" to attach it, or Back.
- The location map shows your Home Assistant zones for reference.

## 0.4.8

- Share location → From a device now lists your own devices first: the trackers linked to your person in Home Assistant.
- Admins also get a collapsed "Other devices" section with everything else. Other users only see their own devices.

## 0.4.7

- Share location: "Pick on map" is now the first option.
- Fixed "Use this spot" doing nothing on Home Assistant 2026.10+ (the new map engine), and the map now starts on your home.

## 0.4.6

- Reactions now match the way MeshCore One and MeshCore Open actually do it, checked against their code and test vectors:
  - Sends MeshCore One's current format (`@[Name]👍` + hash on channels, `👍` + hash in DMs), which both apps read.
  - Reads MeshCore One's current and older formats, and MeshCore Open's `r:` reactions with its full emoji list.
  - The backend now keeps the sender radio's timestamp for received messages, which both apps' hashes use. Older messages fall back to a short time window.
  - Reactions that match no loaded message are hidden, as the apps do, rather than guessed onto the wrong message.

## 0.4.5

- Replies now show the message they answer, as a quote at the top of the bubble. Tap it to jump to the original.
- Your own replies show the @mention highlighted straight away.
- Emoji button in the message box: recent emoji first, then categories. Inserts where the cursor is.
- Reactions: tap a message and pick one of 👍 ❤️ 😂 🎉 👏 🔥. They show as chips under the message, and reactions from MeshCore One and MeshCore Open show too.
- "+" button: share a location (from a Home Assistant device with a position, or by picking a spot on the map) or a contact (including your own).
  - A location shows an amber strip in the box with a warning below it, warns if the spot is inside one of your zones, and asks you to confirm before sending. Any text you type becomes its caption.
- Shared locations and contacts show as cards, with Open map / Add contact.

## [0.4.4] - 2026-11-24

### Added

- **Replies show what you're replying to.** Reply now puts a "Replying to Dave · …" strip at the top of the message box instead of typing `@[Dave]` into it. ✕ or Esc cancels it. On air it's still sent as `@[Dave] your text`, the same as the MeshCore apps, and the byte counter includes that prefix.
- **Resend for unheard or failed messages.** Tap one of your messages marked Unheard or Failed and choose Resend. The dialog explains that an unheard message may still have been delivered out of your radio's range; on a channel, Resend asks you to confirm first, since others may already have it.

### Changed

- **New message box layout.** The text sits in a rounded box with a toolbar row underneath for the byte counter and Send button, with room for more buttons (emoji, attachments) to come. Notes such as "too long" appear below the box.

## [0.4.3] - 2026-11-24

### Added

- **"Keep channel messages trackable" setting** (Settings → Messages, on by default, saved per browser). Channel messages are limited to 155 bytes including your radio's name, as in MeshCore Chattx, so the repeats of every message you send can be detected. Turn it off to allow the firmware's full 160 bytes; messages over 155 then still show the "will show as Unheard" note. Direct messages keep 160 bytes either way.

## [0.4.2] - 2026-11-24

### Changed

- **The bytes-left counter sits under the message box**, on its own line with any note, instead of inside the box.
- **It counts the text exactly as typed**, so typing a space changes the count straight away. (Spaces at the ends are still trimmed when sending.)

## [0.4.1] - 2026-11-24

### Added

- **Bytes left in the send box.** A small counter shows how much more fits in the message, counted in bytes as the radio counts them (accented letters take 2, most emoji 4 or more). On a channel your radio's name and ": " count too. It turns amber under 20 and red when the message is too long, and Send is blocked until you shorten it, so a message is never refused or cut off. Channel messages long enough that their repeats can't be detected (over 155 bytes with your name) get a note that they'll show as Unheard.

### Security

- **Private channel keys are no longer sent to non-admin users.** The channel list included every channel's secret key for any logged-in Home Assistant user, so a non-admin could copy a private channel's key and read or post on it from their own radio. Keys now go to admins only, who are the only ones who can edit channels.

### Development

- CI now runs on this fork, and runs the backend tests (previously only the frontend was tested in CI). The frontend job also checks the committed panel bundle matches its source.
- `requirements_test.txt` includes `meshcore` and `pynacl`, without which the identity tests failed.
- Removed the `npm run lint` scripts, which had no ESLint configuration and did nothing.

## [0.4.0] - 2026-11-24

First release of this fork, maintained by kohkohwastaken. Based on MeshCore Chat 0.3.2 by Matt Wolter.

### Added

- **Nodes on a map.** A **Map** button on the Nodes tab shows every node with a known position on Home Assistant's own map, the same one as its Map dashboard, following your theme. Each node is labelled with its 2-character ID (the first byte of its public key, as it appears in message routes), with a border coloured by type. Nearby nodes group into a numbered circle; tap it to zoom in, or turn grouping off with the button on the map to see every node. Tap a node to open its details, with Trace, Add to Contacts and Message. The map shows the same nodes as the list, using the current filters and search, and keeps its view when the filters change.
- **A message's route on a map.** **Show Route on Map** in the message dialog draws the path from the sender, through the repeaters, to you, with the distance of each leg. Repeaters are matched to your contacts by their path prefix. When a message was heard over more than one path, each path has its own tab.
- **Type filter with "All".** The Clients / Repeaters / Room Servers / Sensors filter now also shows when **All** is selected, and it is kept when you switch between All, Added and Discovered, so you can for example show all repeaters.

The maps use Home Assistant's own map component (`ha-map`, the one behind its Map card), so they need Home Assistant 2026.10 or newer; on an older version the map area shows a short note, and the route's hop list and distances still work. No map data is fetched from outside Home Assistant. Route matching is ported, trimmed down, from [MeshCore Chattx](https://github.com/michalsiman/meshcore-ha-chattx) by Michal Šiman (MIT).

### Fixed

- **A conversation shows "1 new" for a message you already read.** When a message arrived while you were reading at the bottom of a conversation, it was not marked as read. After you switched to another conversation, the first one showed an unread badge for that message. Messages that arrive while you are at the bottom are now marked as read.

## [0.3.2] - 2026-11-13

This release makes MeshCore Chat work properly with meshcore-ha 3.x. It has fixes only, no new features.

### Tested with

- **meshcore-ha v3.0.5**, with the full test set. Also run against v3.0.4.
- **meshcore-ha v2.7.0 and v2.10.0**, with a smaller check only.
- **Home Assistant** 2025.6.0 and 2026.10.4 in tests, and 2026.11.1 on a live installation.
- **meshcore_py** 2.3.17.

### Requirements

These are the same as meshcore-ha v3.0.5 itself requires.

- Home Assistant 2025.6.0 or newer. This is a higher minimum than MeshCore Chat 0.3.1 had.
- meshcore-ha v2.7.0 or newer.
- MeshCore Chat installs no Python packages of its own. It uses two that meshcore-ha installs: `meshcore` (the meshcore_py library) 2.3.11 or newer, and `pynacl` 1.5.0 or newer.

### Fixed

- **Region list is empty on meshcore-ha 3.x (#50, #53).** The channel dialog now reads your regions from where meshcore-ha 3.x keeps them. Older meshcore-ha versions still work. Clearing the region list is respected. The same fix was offered in #54. Thanks to [@Poket-Jony](https://github.com/Poket-Jony).
- **Path Hash Mode always shows "1 byte".** Settings now reads the real value from the radio. If the radio does not answer, it shows "Unknown" and does not guess. Thanks to [@vharbich](https://github.com/vharbich) for [#49](https://github.com/mwolter805/meshcore-ha-chat/pull/49).
- **The panel breaks when the separate MeshCore card is also installed (#39).** Both used the same internal name for a page element. MeshCore Chat now uses its own name, so the two can be installed together.
- **Home Assistant warns about a deprecated device lookup (#45).** MeshCore Chat now uses the newer lookup, and looks devices up for the selected radio only.
- **Commands on meshcore-ha 3.x.** Commands now go through meshcore-ha's own command service. This keeps its permission checks, sends the command to the radio you selected, and shows its real error messages.
- **Identity import and regenerate on meshcore-ha 3.x.** An administrator can import or regenerate the radio's identity key again. MeshCore Chat waits for the radio to reconnect and checks that the new identity is the one that was requested. If the radio rejects the key, it is not rebooted.
- **Delivery status.** A delivered channel message keeps its status. "Collecting", "cannot be observed" and "no repeaters heard it" are now shown as three different states.
- **Failed sends.** If sending fails with an error, your text is kept so you can try again, and no other message is marked as failed by mistake.
- **Messages loading at the same time as status updates.** They no longer overwrite each other.
- **Direct messages from a sender with no name** now appear right away.
- **Too-long messages** are still refused, and your text is kept. They are never cut short or split without telling you.
- **Smaller fixes:** replies to remote commands go to the right radio, the node list refreshes after discovered contacts are cleared, and the CLI Console counter no longer appears among device readings.

### Maintenance

- The panel is now built with TypeScript 7 and a newer bundler. The panel file that ships is byte for byte the same as one built with the old tools.
- The automated checks on GitHub use newer versions of their tools.

### Known limitations

- If the radio is offline but the send call still returns normally, a message can stay "sending". meshcore-ha's failure event does not say which message failed, so MeshCore Chat cannot always tell.
- A message marked as failed in the panel, and its kept text, are remembered only until you reload the page.
- Identity import and regenerate, and saving every Path Hash Mode, were tested with a simulated radio. They were not tested on a real radio through a reboot.
- Not every combination of Home Assistant and meshcore-ha versions was tested. See "Tested with". meshcore-ha 2.x had only a smaller check; if you can, use meshcore-ha 3.0.5.

## [0.3.1] - 2026-06-24

### Fixed

- **Blank sidebar panel on older Android System WebViews (GitHub issue #22).** The panel bundle is now down-leveled at build time so it parses on browser engines back to roughly 2018 (Chrome / Android System WebView 64, Safari 12). The Lit 3 runtime ships ES2021 logical-assignment syntax (`??=`, `||=`, `&&=`) that an Android System WebView older than Chromium 85 cannot parse, which left the panel blank in the Home Assistant Android companion app while it rendered correctly in a desktop browser. The build now runs the assembled bundle through `@babel/preset-env` against an explicit `browserslist` floor; behavior on modern engines is unchanged and no new runtime polyfills are added.

## [0.3.0] - 2026-06-18

### Fixed

- **Device-config commands no longer report success on failure (GitHub issue #7).** Setting TX power, coordinates, radio parameters, or path-hash mode from the Settings tab now inspects each command's result: a firmware NACK or an error event surfaces a failure that names the setting that failed, the reason the device reported, and any settings already applied in that request, then stops — instead of silently reporting success while the radio was unchanged.
- **Storage hardening (GitHub issue #6).** A failed save of the message store, unread cursors, or channel scopes no longer risks silent message loss: save failures are caught and the affected conversations stay marked dirty for a passive retry, and message loads validate their on-disk shape and fall back to empty on corrupt data *without* overwriting the file. One aggregated error is logged per failed flush rather than a crash.
- **Channel add / edit / remove no longer fails after an upstream rename.** Saving a channel now calls the core integration's public `fetch_all_channel_info()`; the prior private method had been renamed upstream, which broke channel management with an `AttributeError`.
- **Editing a channel no longer regenerates a custom key.** The Edit Channel dialog now loads a channel's existing key, so changing a channel's region scope (or any other field) preserves a custom key instead of silently re-deriving it from the name — which had caused messages to stop decrypting across nodes.
- **Spurious error toast on contact add / remove.** Routed contact add/remove now treats a body-less OK from the core integration as success, so adding or removing a contact no longer shows an error even though the change took effect.

### Added

- **Per-channel region scope (GitHub issue #2).** Each channel can now be given a MeshCore region scope so sends are limited to that region, with an **All regions** option for an explicit global flood — matching the official app's "Set Scope". Received messages show the inbound scope (the region name, or an "all regions" badge for a global flood); the global label is derived by the panel itself from data the core integration already emits, so it works on a stock upstream install. Requires core meshcore-ha v2.7.0+ and companion firmware v1.10.0+ (see Compatibility).
- **Rich companion device card.** The Settings-tab companion card now renders the same hero tiles managed repeaters/clients get — battery (or USB/mains), signal (RSSI · SNR), radio activity, and message sent/received counts — plus a diagnostics sensor table (noise floor, TX queue), the radio fault flags (Packet Pool / CAD Timeout / RX-Start Timeout) shown as OK/Detected rows, and a 48-hour message-rate graph. The radio-activity tile is a lifetime average of the companion's cumulative TX/RX airtime over uptime (the companion exposes raw airtime rather than the windowed utilisation a repeater reports), and the Messages Received tile annotates the RX error rate from `recv_errors`. The tiles self-hide when their entities are absent, so the card is unchanged unless **Self Diagnostics** is enabled in the upstream meshcore integration.
- **Command dialog improvements.** The Issue Command dialog now shows human-readable values, a live device-response feed, and a distinct "login not confirmed" state; v1.16 firmware command-dialog updates are included.
- **Message-rate chart tooltip** and composer polish in the chat tab.

### Security

- **Disclosure policy and posture doc.** Added `SECURITY.md` (private vulnerability reporting via GitHub, coordinated-disclosure terms, and a Home Assistant trust-model scope note) and `docs/security-posture.md` documenting the threat model and trust boundaries — Lit auto-escaping at the render layer, the admin gate on every device- and config-changing WebSocket command, schema validation, and on-disk message persistence.
- **Automated security scanning.** Added CodeQL (Python + TypeScript), OpenSSF Scorecard, and Dependabot, with a Security section and status badges in the README. All workflow actions are pinned to commit SHAs.

### Compatibility

- **Home Assistant 2024.12+** — unchanged.
- **Core meshcore-ha integration floor raised to v2.7.0** (from v2.6.0). The region scope selector and "All regions" option rely on the message `scope` argument and inbound `region_scope` / `flood_scope` fields added to the core integration in v2.7.0 (released 2026-05-31); the rest of the release works on the prior floor.
- **Companion firmware v1.10.0 or newer** is required for the region scope feature — MeshCore flood-scope support landed in companion firmware v1.10.0.
- **No migration.** Channel keys, stored messages, unread cursors, and saved channel scopes are preserved across the upgrade.

## [0.2.1] - 2026-05-16

### Fixed

- **Custom channel keys (GitHub issue #1).** The "Custom Key" field in
  the Add Channel dialog now correctly accepts a 32-character hex
  string (16 bytes, AES-128) — matching the MeshCore protocol's
  channel-key size and the meshcore_py SDK's validation. Previously
  the field required 64 hex characters and the backend silently
  truncated the input to the first 16 bytes, which meant users
  pasting a normal MeshCore channel key were blocked at validation,
  and users who padded their key to 64 chars only had its first half
  programmed on the radio. Backward compatibility note: channels
  already configured under the prior UI continue to work as-is on
  the radio; re-entering the same key elsewhere now requires only
  the first 32 hex characters of whatever was originally typed.

- **Unread badge clearing on channel re-entry.** When clicking back into
  a busy channel with unread messages exceeding one viewport, the badge
  no longer disappears prematurely and the viewport now lands at the
  unread divider (not at the conversation tail). The fix landed in two
  layers across two commits: the first removed an active-entity-zero
  heuristic in the badge state, added `overflow-anchor: none` to the
  chat container, and gated mark-read during the post-switch scroll;
  the second simplified those gates by blocking the underlying race —
  lazy-load-older firing on the synthetic scroll event that follows
  Lit's re-render after `_fetchAroundAnchor`, before
  `_doScrollWithRetry` positions the divider. Now mark-read fires
  reliably when the user can see the latest message (small or
  fully-visible-unread conversations) and stays when the tail is
  below viewport (long-history channel re-entry).

- **Unread divider** no longer renders when only outgoing groups follow
  the anchor — fixes a divider-projection inconsistency surfaced during
  multi-entry switching tests.

### Refactored

- **UnreadController architecture (Phases 2-4).** The frontend's unread
  state is now consolidated in a single panel-owned `UnreadController`.
  Phase 2 introduces the controller and migrates the badge data
  subscription. Phase 3 moves the per-conversation read-progress state
  machine into the controller (anchor, grace window, post-switch timer,
  dedup guard). Phase 4 centralizes the "↓ N new" pill label and the
  `cursorAtTail` query.

### CI

- **Validate workflow** now skips on non-canonical repos via a
  `github.repository` guard, eliminating spurious HACS-validation
  failures on the private dev mirror.

### Compatibility

Same Home Assistant version floor as 0.2.0 (HA 2024.12+); same
core integration version floor (meshcore-ha v2.6.0+).

## [0.2.0] - 2026-05-09

First tagged release. Active development continues; treat this as an early preview, not a stable LTS.

### Security audit complete

A pre-public-release audit landed for this version:

- **Admin gate on 15 destructive WebSocket handlers** (b45cfc8). Non-admin HA users can no longer wipe channel keys, regenerate the companion identity, reconfigure the radio, or issue commands to managed repeaters. See [INSTRUCTIONS.md → Permissions](./INSTRUCTIONS.md#permissions) for the full list.
- **XSS hardening** (58454b8). Mention rendering escapes HTML instead of using `unsafeHTML`; regression test covers the previous attack vector.
- **Identity-dialog hardening** (21e5454). Hex validation on key fields; IMPORT flow requires typed confirmation.

### What's in 0.2.0

- Sidebar chat panel with channels, DMs, contact list, and per-message route popups (hops, SNR, RSSI, exact receive timestamp).
- Persistent message store (default 90-day / 500-msg per conversation, configurable to 1–365 days / 50–5000 msgs).
- Cross-conversation date-range search.
- Unread-count cursor — survives reloads, gates auto-mark-read on user engagement, refreshes on entry switch.
- Devices tab — per-device sensor tiles (SNR, RSSI, airtime, battery), neighbor tables, quick-action buttons, Issue Command, Reboot, Start OTA Update.
- Nodes tab — full network discovery view, filterable by Added / Discovered and by node type, with last-heard sort and stale-record cleanup.
- Settings tab — radio configuration (TX power, frequency, bandwidth, spreading factor, coding rate, path-hash mode), rename, location, Key Management.
- Trace dialog with Discover, Select repeaters, and Enter path modes.

### Requirements

- Home Assistant **2024.12** or newer.
- Core [meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) integration **v2.6.0** or newer (released 2026-04-27). 0.2.0 of the chat companion calls the structured query services (`meshcore.get_contacts`, `meshcore.trace`) introduced in 2.6.0.

### Installation

Via HACS — see the [README's Installation section](./README.md#installation). After install, restart HA and add the integration from **Settings → Devices & Services → Add Integration → MeshCore Chat**.

### Known issues

- The **Discover** trace mode (flood path discovery) sometimes silently drops on multi-hop routes. If a Discover trace fails, switch to **Select repeaters** or **Enter path** in the trace dialog to specify the route explicitly.

### Upgrading

First tagged release — no migration. If you've been tracking `main` via HACS, switch HACS to track tagged releases and pin v0.2.0.
