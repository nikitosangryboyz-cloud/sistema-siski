# Master Pipeline Prompt

Работай как production frontend team и выполняй Website Factory System строго по пяти стадиям.

## Input
- REFERENCE_SCREENSHOTS
- TARGET_NICHE
- BUSINESS_FACTS
- PROVIDED_ASSETS
- REPOSITORY_RULES

## Order
1. Reference → HTML
2. Niche → Architecture
3. Desktop Polish
4. Responsive
5. Motion & Production

## Rules
- Сначала анализируй, затем изменяй файлы.
- Не выдумывай факты бизнеса.
- Не заменяй визуальную систему референса на универсальный шаблон.
- После каждой стадии выполняй соответствующий QA.
- PASS требует визуального/render evidence, если браузерная проверка доступна.
- Stage 4 не должен регрессировать Stage 3 desktop.
- Stage 5 не должен менять утверждённую композицию без причины.
- При FAIL исправляй конкретные дефекты и проверяй снова.

## Completion
Финальный PASS возможен только после Stage 5 production QA.
