# Project Submission Report

## 1. Student Details

- **Full Name:** Benedict Muuo
- **GitHub Username:** BenedictMuuo
- **Email:** [benedict.muuo@strathmore.edu]

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-catalogue-164926/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-catalogue-164926/commit/2346115b4b1f91c09c197e65bef16871786d42f9
- **Why this one?** It carries a correct type tag, an imperative subject under fifty characters, a body that explains the behaviour rather than restating the diff, and a footer that closed issue #6 automatically on merge.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-catalogue-164926/commit/63a9b313eed12f86bff1669a3a2140ec23efaeba
- **What happened and how did you recover?** While engineering the modify/delete conflict my connection dropped, so `git fetch origin` failed silently and the following merge reported "Already up to date" instead of conflicting. My local `origin/main` was stale, so there was nothing to collide with. I confirmed the deletion had actually reached `main` using `git log --oneline origin/main`, re-ran the fetch once the connection returned, and the conflict then surfaced correctly.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/library-catalogue-164926/pull/15
- **What did you check before merging?** I read the full diff in the Files changed tab to confirm the storage read, the save call inside the accession function and the clearing helper were the only changes, and I verified the `Closes #6` footer was linked so the issue would close on merge.

### D. One Thing You Would Do Differently

- **What would you change?** I would push every feature branch to the remote immediately after creating it, rather than only when the work was finished. Two of my conflict branches existed only locally when I attempted their merges, which cost me an extra `--set-upstream` step and made the branch state harder to see on GitHub mid-task.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/library-catalogue-164926/tree/feat/11-footer-credit

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
Milestones- <img width="596" height="197" alt="image" src="https://github.com/user-attachments/assets/266bd726-264f-4501-a410-c2d83ddd6b34" />


issues- <img width="716" height="248" alt="image" src="https://github.com/user-attachments/assets/4f78b9fe-657e-4208-be0b-3216e4e46fa9" />


* **Caption:** Three milestones split the build into setup and layout, catalogue features, and polish and deployment, with nine granular issues assigned across them.

### B. Project Board

<img width="943" height="405" alt="image" src="https://github.com/user-attachments/assets/2046d660-0660-4ab5-8081-2a33daade88c" />


* **Caption:** Issues moved individually through To Do, In Progress and Done as each branch was opened and merged, rather than being cleared in one pass at the end.

### C. Branching Architecture

<img width="647" height="422" alt="image" src="https://github.com/user-attachments/assets/182efbe5-8771-4b80-86a7-c79eee787b4c" />


* **Caption:** Every branch is prefixed with its commit type and carries the issue number it addresses, for example `feat/4-search-filter` and `style/2-page-layout`.

### D. Pull Requests & Traceability

<img width="935" height="436" alt="image" src="https://github.com/user-attachments/assets/8c548dc8-65ff-48ee-9a66-8f543a8e16da" />


* **Caption:** This pull request merges `feat/4-search-filter` into main and closes issue #4 through the footer reference in its description.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent edits to the same line of the same file on two branches.

#### Step 1: Generating the Clash
https://github.com/orgs/IS-PROJECT-2026/projects/217/views/1

* **Caption:** `feat/11-footer-credit` collided with main after `feat/10-footer-year` was merged, producing `CONFLICT (content): Merge conflict in index.html`.

#### Step 2: Inside the Code Editor (Conflict Markers)

<img width="572" height="80" alt="conflict_evidence_1" src="https://github.com/user-attachments/assets/d11d9b61-4dc2-4374-8ea5-708a03c3dac6" />




* **Caption:** Both branches rewrote the same footer line ,one adding the establishment year, the other adding a cataloguer credit. Neither change is a superset of the other, so I combined them into a single line carrying both pieces of information.

#### Step 3: Resolution & Clean Merge

<img width="935" height="438" alt="image" src="https://github.com/user-attachments/assets/a3741b78-9bc8-4739-8fd5-fd0a89382b8f" />


* **Caption:** The markers were removed, the merged line committed as `fix: resolve footer merge conflict`, and the branch merged into main through a pull request.

---

### Conflict 2 — Different Cause

**What cause did you use?** A file deleted on one branch and modified on another (modify/delete).

**Why does this cause trigger a conflict?** Git merges by comparing each side against a common ancestor, but one side removed `notes.txt` entirely while the other changed its contents. There is no way to apply an edit to a file that no longer exists on the incoming side, so Git cannot decide whether the deletion or the edit represents the newer intent and stops for a human decision.

<img width="851" height="89" alt="conflict_evidence_2" src="https://github.com/user-attachments/assets/8800c8ba-9960-475c-a69d-75d7fe4c1176" />


* **Caption:** `chore/14-remove-notes` deleted `notes.txt` while `docs/15-expand-notes` extended it; I kept the file because the added notes were still accurate.

---

### Conflict 3 — Different Cause

**What cause did you use?** The same new file created independently on two branches (add/add).

**Why does this cause trigger a conflict?** `settings.js` did not exist in the shared history, so the two versions have no common ancestor for Git to diff against. Without a base version it cannot tell which lines were added and which were changed, so it treats the entire file as disputed and stacks both versions between conflict markers.

<img width="285" height="212" alt="conflict_evidence_3" src="https://github.com/user-attachments/assets/ca53f305-5403-4ab6-a8b8-6c9aa762a031" />


* **Caption:** `chore/16-catalogue-settings` and `chore/17-shelf-settings` each created `settings.js` with different keys; I merged both sets into one settings object.

---

