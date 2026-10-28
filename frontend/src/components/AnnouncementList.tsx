import { useState } from "react";
import { useAnnouncements } from "../api/announcements";
import type { TargetRole } from "../types";

// TODO(candidate): implement this component.
//
// Requirements:
//   - A text input bound to `search`, debounced or not (your choice), that
//     filters announcements by title (case-insensitive substring match — the
//     backend already does the matching, you just need to send the param).
//   - A <select> bound to `targetRole` with options: "" (all), "student",
//     "lecturer", "all".
//   - Call useAnnouncements({ search, targetRole }) and render:
//       - a loading state while the query is pending
//       - an error state if the query failed
//       - the list of announcements (title, content, target_role) once loaded
//       - an empty state ("No announcements found") when the list is empty
//   - Show the total count from the response's `meta.total` somewhere in the UI.
export function AnnouncementList() {
  const [search, setSearch] = useState("");
  const [targetRole, setTargetRole] = useState<TargetRole | "">("");

  // Wire this up once useAnnouncements is implemented.
  void search;
  void targetRole;

  return <div>TODO: implement AnnouncementList</div>;
}
