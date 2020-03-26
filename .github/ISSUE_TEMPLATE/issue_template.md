---
name: ISSUE_TEMPLATE
about: Create Issue Auto
title: ADD * {{ date | date('dd/mm') }} (ajout des fichiers manquants)
labels: help wanted
assignees: ''

---

Someone just pushed, oh no! Here's who did it: {{ payload.sender.login }}
