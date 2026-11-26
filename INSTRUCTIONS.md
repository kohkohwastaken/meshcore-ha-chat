# Using MeshCore Chat

How to do the common things in MeshCore Chat, plus a few gotchas worth knowing before you change anything. It assumes you've installed it (see [README.md](./README.md)) and **MeshCore Chat** is in your sidebar.

New to MeshCore itself? [meshcore.io](https://meshcore.io) is the place to start; [docs.meshcore.io](https://docs.meshcore.io) covers the protocol and firmware.

---

## Quick start

The panel has five tabs along the top (on a phone, along the bottom):

- **Chat**: channels and direct messages.
- **Nodes**: every node your radio knows, on a map or in a list.
- **My radio**: your companion radio's profile and radio settings.
- **Repeaters**: the repeaters and clients you manage.
- **Settings**: display preferences, saved in this browser.

The header shows which radio you're on (with a switcher if you have more than one), its battery, and whether it's connected. If it says **Offline**, your radio isn't talking to Home Assistant; fix that in the core MeshCore integration first.

---

## Permissions

Any Home Assistant user can read messages, browse nodes, open dialogs and search. These need an **administrator** (Settings → People → Users → **Administrator**); for anyone else the request is refused and nothing changes:

| Where | Action |
|---|---|
| My radio | Change radio settings · rename · location · Key Management · Command |
| Repeaters | Command · Reboot · remove neighbours |
| Contacts | Add · Add manually · Remove |
| Chat → ⚙ Manage channels | Add · edit · remove channels |
| Nodes | Clear stale nodes |
| Node details | Trace (sends packets on the mesh) |

This is enforced by Home Assistant itself, not just hidden in the panel.

---

## Chat

### Starting a conversation

- **A channel**: click a channel under **Channels**. To add or remove channels, use the ＋ or ⚙ next to the Channels heading.
- **A direct message**: click **Contacts** next to the Direct messages heading, find the contact, and click **Message**. Direct messages only appear in the list once they have messages in them.

Click a section heading to collapse it, if you only care about channels or DMs for a while.

### Reacting to a message

Click a message and pick **React**, then any emoji. Reactions are sent in the [MeshCore One format](https://github.com/Avi0n/MeshCoreOne/blob/main/docs/Reactions.md), which MeshCore One, MeshCore Open and other apps understand; apps that don't will show it as a short message. We also understand reactions sent by MeshCore Open and simple `@[Name] 👍` messages.

The reaction toggle in the chat header shows or hides the reaction messages themselves. With it on, a reaction to a message you never received shows as pending, so you can see what it's for.

In **Settings → Reactions** you can choose whether a channel message that's just `@[Name]` and one emoji counts as a message, a reaction, or both, and whether to show reactions to messages that haven't arrived.

### Replying

Click a message and pick **Reply**. MeshCore has no built-in replies, so a reply is just a message starting `@[Name]`. To avoid confusion you can only reply to someone's **newest** message; the panel tells you why if you try an older one. Incoming replies show a quote of the message they answer when it's clear which one it is (that person's only message in the last 10, within 30 minutes).

### Rooms

A room server is a small bulletin board on the mesh: it keeps the last 32 posts and sends them to people who log in. Rooms you've added to your radio appear under **Rooms**.

- **Opening a room** logs you in and catches you up on posts you missed. It sends one login: your saved password if you have one, otherwise no password (which works while the room still remembers you, until it restarts). It only asks for a password if that fails. If a login gets no reply over the room's usual route, it tries once more by flood. Most rooms use the default guest password `hello` unless the owner changed it. Passwords can be up to 15 characters.
- **Nothing is sent in the background.** After you log in, the room sends new posts to your radio by itself. Press **⟳ Check for new posts** in the header when you want to make sure you're up to date. It logs in again, which uses a little airtime. The status line shows when you last logged in and when the last post arrived; it isn't a live connection.
- **Who wrote it:** each post shows its author's name, or the first part of their key if you don't know them.
- **Read-only:** if the room lets in read-only guests, a wrong password still gets you in, but you can't post. The panel says so and disables the message box.
- **Posts delayed or paused:** if the room re-sends a post, it didn't hear your radio's reply. After a few misses it stops sending to you; the panel shows **Posts paused**, and Check for new posts starts it again.
- **If the password changes:** you stay in until the room restarts. After that, opening the room shows **Couldn't log in**; enter the new password and it replaces the saved one. Use **⋯ → Forget saved room password** to remove it.
- Room posts are limited to 150 characters, like the official MeshCore app.

### Message details, hashes and delete

Click any message for its details: hops, SNR, RSSI, the exact time, **Show route on map**, and its **hash** (also shown next to the hop count). The hash identifies the message across apps; that's what reactions point at. A hash marked `≈` is estimated because we don't know exactly when it was sent.

To delete a message, click it and pick **Delete**. To delete a whole conversation, use the ⋯ menu in its header. Both ask first. Deleting only removes it from Home Assistant, not from anyone's radio.

### Searching

Use the search in the Chat header to search across all conversations, with optional dates. Click a result to jump to it.

---

## Contacts

Open **Contacts** from the Direct messages heading.

### Adding a contact

A node is **Discovered** when your radio hears it. It becomes a **Contact** when you add it to your radio's contact list, so you can message it, trace to it, and your radio keeps a route to it.

1. **Contacts** → **Discovered** tab.
2. Search, or sort by name or when last heard.
3. Click the node, then **Add**.

You can also add from the **Nodes** tab: click a node, then **Add**.

### Adding a contact manually

For someone your radio hasn't heard yet: **Contacts** → **＋ Add manually**, then paste any of:

- a chat code or `meshcore://contact/add?…` link someone shared,
- the text from their QR code,
- a 64-character public key (you'll be asked for a name).

It shows as **Unverified** until your radio actually hears from that key (an advert, or a direct message from them). Treat unverified contacts with care; anyone can paste any key and name.

### Sharing a contact

Click **Share my contact** (top of Contacts), or open any contact and click **Share**. You get:

- a **QR code** you can copy or save as an image,
- a **chat code** and a **link** to copy,
- **Send to nearby radios**, which broadcasts it over the air.

### Removing a contact

Open the contact and click **Remove**, then confirm. It comes off your radio straight away. It stays as Discovered while your radio keeps hearing it.

---

## Nodes

- **Map | List** switches between the map and a list. Click a node for its details beside the map; the selected pin is highlighted.
- **Filters**: Added/Discovered, node types (tick one, several or all), and **Heard** (24 hours, 7 days, 30 days, 1 year, or since a date). Settings → Nodes sets the default.
- **Show on map** (from a contact or node's details) jumps to that node, if it has a location.

### Clearing stale nodes

Your radio remembers every node it's heard, which adds up. **⋯ → Clear stale** opens a dialog:

1. **Not heard for more than** any number of days. "Heard" is when your radio last heard them, by its own clock.
2. **Types**: companions, repeaters, room servers, sensors, or all.
3. **Which**: **Discovered** nodes, **Manually added** contacts that have never been heard from (these are removed from your radio too), or both.

It shows how many will be removed before you confirm. Contacts you added from the mesh are never removed. Cleared nodes come back if your radio hears them again.

### Tracing a path

A trace measures the round trip and per-hop SNR to a node.

1. Click the node (Nodes tab or Contacts), then **Trace**.
2. Pick how to find the route:
    - **Discover**: your radio finds a route itself. Usually what you want.
    - **Select repeaters**: choose the repeaters in the path, in order.
    - **Enter path**: type the hop IDs, e.g. `86,AE`. Useful when Discover fails but you know the route.
3. **Run trace**.

The result shows each hop's SNR and the total round trip, and can be shown on the map. A failure such as `path_discovery_timeout` usually means the radio can't reach that node right now.

---

## My radio

- **Radio settings**: TX power, frequency, bandwidth, spreading factor, coding rate and path hash mode, under **Advanced**. Click **Apply**, then reboot (see the warning below).
- **⚙ menu**: Rename, Key Management, Reboot and hidden sensors.
- **Share my contact** and **Command…** for anything without its own button.

With **Self Diagnostics** turned on in the core MeshCore integration's options, the page also shows battery, signal and message-count tiles for your radio.

---

## Repeaters

Each repeater or client you manage has a card with its status and when it was last heard. Click it to open:

- **⟳ Refresh status**: logs in and asks for fresh stats. **Last status** shows when they last arrived.
- Sensor tiles (click one for its history), the neighbour table, and buttons for Flood Advert, Sync Clock, Req Telemetry and Req Status.
- **⚙**: Command, Reboot, Start OTA and hidden sensors. Commands log in with the password set in the core MeshCore integration.

To add or remove managed devices, or set their passwords, click **Manage devices**; it opens the core MeshCore integration's options.

---

## Message history

Two settings live in Home Assistant's options rather than the panel: **Settings → Devices & Services → MeshCore Chat → Configure**.

- **Max messages per conversation**: default 500 (50–5000). Older ones drop off as new ones arrive.
- **Message retention days**: default 90 (1–365). Older messages are removed when Home Assistant restarts.

---

## Operational warnings

These are the gotchas that bite users on first encounter. Read all three before changing anything on the My radio tab.

### Radio settings require a companion reboot to take effect

Changes to **TX power**, **frequency**, **bandwidth**, **spreading factor**, **coding rate**, or **path hash mode** are written to the companion device's persistent config when you save them — but the running radio keeps using the previous values until the radio itself restarts.

Behaviour you'll see if you skip the reboot:
- The My radio tab shows the new value (it reflects the persisted config).
- Other nodes still hear the radio on the *old* parameters.
- Traces that should now be reachable on the new parameters fail.

To apply the change:

1. **My radio** tab.
2. Click the ⚙ cog.
3. **Reboot**.
4. Wait ~5 seconds for the radio to come back online; the connection status badge in the panel header flips to **Online** when it's ready.

This is a hardware/firmware constraint, not a panel limitation — it is reported the radio typically applies its config at boot.

### Renaming the companion changes its entity_ids in HA

The companion's **name** is the user-visible string you set in **My radio → ⚙ → Rename**. It's also what HA uses to derive the `entity_id` for every sensor and binary_sensor the upstream `meshcore` integration registers for the device.

When you rename the companion, **every meshcore entity tied to it gets a new `entity_id`.** Concretely:

```
sensor.meshcore_<oldname>_battery_percentage
                ↓
sensor.meshcore_<newname>_battery_percentage
```

Anything in your HA configuration that referenced the old `entity_id` will silently stop working. The list of things that can break:

- **Automations** — triggers, conditions, actions referencing the old IDs.
- **Scripts** — same.
- **Dashboards** — every card whose entity is the old ID renders empty after rename.
- **Template sensors** / **template binary_sensors** — `states('sensor.meshcore_oldname_*')` returns `unknown`.
- **REST and webhook integrations** — anything outside HA pulling state by entity_id.
- **Recorder filters** / **history graph customizations** — referenced IDs disappear from the recorder.

Home Assistant does **not** automatically update those references; you have to walk through them and edit by hand.

If you need to rename, the safest order is:

1. Search your HA config (UI editors and YAML) for the old name. The Configuration → Search dialog handles the UI side; `grep -ri "meshcore_oldname_" config/` handles the YAML.
2. Make a note of every reference.
3. Rename the companion via the panel.
4. Update each reference to the new ID.
5. Restart Home Assistant (or reload the affected scripts/automations) so the new IDs are picked up.

If your install is small and brand-new, a rename is no big deal. If you've built dashboards on top of the meshcore entities, plan the rename window.

### Regenerating or importing the companion identity also rewrites entity_ids

The **My radio** tab's ⚙ menu has a **Key Management** option with two destructive operations:

- **Regenerate Identity** — creates a new public/private key pair on the companion. Requires typing `REGENERATE` to confirm, since it's irreversible.
- **Import Private Key** — adopts a hex private key you paste in. Requires a device reboot afterwards.

Both have the same Home-Assistant-side consequence as renaming: the companion's identity changes, so every meshcore entity is re-derived and its `entity_id` changes. Anything in your HA config that referenced the old IDs (automations, scripts, dashboards, template sensors, REST integrations) breaks until updated. Treat this as the same kind of planned event as a rename — see [Renaming the companion changes its entity_ids in HA](#renaming-the-companion-changes-its-entity_ids-in-ha) above for the recommended sequence.

---

## Tips & troubleshooting

### Refreshing the firmware version on a managed repeater card

The firmware version shown in a managed repeater's header (e.g. `Firmware: v1.14.1`) is captured by the upstream [meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) integration once at config time and is **not periodically re-queried**. After flashing new firmware on a remote repeater, the displayed version stays stale until you ask the integration to re-query.

To refresh:

1. **Settings → Devices & Services**.
2. Click the **MeshCore** integration card (the upstream one — *not* MeshCore Chat).
3. Click **Configure**.
4. Click the repeater you flashed.
5. Click **Save** — you don't need to change anything; the save action triggers a `ver` query against the repeater and updates Home Assistant's device registry.

The chat panel will pick up the new value on next refresh of the Repeaters tab (within ~30 s, or immediately if you switch tabs).

This is a limitation of the upstream integration, not the chat panel — the panel only displays what HA already knows. A future change to `meshcore-ha` could add `ver` to the periodic poll cycle and make this automatic.

### A managed client shows offline or reports no battery/telemetry

A managed client's card stays **offline** (its Online sensor never leaves `unknown`) and shows no battery or telemetry, even though you can send and receive chat messages with that contact. Messaging and telemetry are different request types: companion ("Pocket") clients reply to chat messages by default, but only answer **telemetry** requests when telemetry is enabled *and* your companion node is permitted to request it. Repeaters answer by default; plain clients don't — so a brand-new managed client commonly looks "offline" until you turn this on.

The fix is on the client device itself, in its MeshCore app:

1. Enable **telemetry**, so the device has something to report.
2. Allow your companion node to **request telemetry** — the device's permission/ACL for who may poll it.

Once both are set, the next poll succeeds: the Online sensor flips to **on**, battery and telemetry sensors appear on the card, and the **Req Telemetry** button on the Repeaters tab returns data instead of timing out. To retry immediately instead of waiting for the next poll cycle, reload the upstream integration at **Settings → Devices & Services → MeshCore → ⋮ → Reload**.

This is a property of the remote device, not a stale entity or stale config in Home Assistant — removing and re-adding the client doesn't change it.

### Showing a sensor you previously hid

Long-pressing a sensor row on a device card and choosing **Hide** stops that sensor from rendering on the card. To bring it back:

1. **Repeaters** tab and open the device (or **My radio** for your companion).
2. Click the ⚙ cog.
3. **View Hidden Sensors**.
4. The modal lists every sensor you've hidden on that device with a per-row Restore button.

Hidden-sensor preferences are per-device and stored in panel-local state — they don't follow the entity into the upstream `meshcore` integration's hidden list.

---

## Known limitations

- **Radio settings need a reboot** to take effect. See above.
- **Renaming or changing the identity of your radio changes its entity_ids.** See above.
- **Reactions and replies aren't part of MeshCore.** They're a convention between apps; an app that doesn't know them shows ordinary messages.
- **Device pairing is done by the core MeshCore integration**, not here.

---

## See also

- [meshcore-dev/meshcore-ha](https://github.com/meshcore-dev/meshcore-ha): the core integration that talks to the radio. **Required.**
- [MeshCore One reactions](https://github.com/Avi0n/MeshCoreOne/blob/main/docs/Reactions.md): the reaction format we use.
- [meshcore.io](https://meshcore.io) and [docs.meshcore.io](https://docs.meshcore.io).
- [README.md](./README.md): installation and requirements.
