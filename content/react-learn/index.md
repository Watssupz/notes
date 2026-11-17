---
title: "Giới thiệu"
description: "Blog học React nâng cao — internals, tối ưu re-render và design patterns, giải thích siêu chi tiết bằng tiếng Việt"
---

<span id="react-nâng-cao--hiểu-sâu-để-viết-tốt" />

**React Nâng Cao — Hiểu Sâu Để Viết Tốt**

## Mục lục

- [Blog này dành cho ai](#blog-này-dành-cho-ai)
- [Tư duy xuyên suốt](#tư-duy-xuyên-suốt)
- [Bản đồ nội dung](#bản-đồ-nội-dung)
- [Danh sách đầy đủ các bài](#danh-sách-đầy-đủ-các-bài)
- [Bảng thuật ngữ](#bảng-thuật-ngữ)
- [Cách đọc hiệu quả](#cách-đọc-hiệu-quả)

---

## Blog này dành cho ai

Blog này **không** dạy lại JSX, props, state hay cách bắt sự kiện `onClick`. Nó dành cho người **đã viết React được rồi** nhưng muốn trả lời được những câu hỏi "tại sao":

- Vì sao component của tôi re-render dù props nhìn như không đổi?
- `React.memo`, `useMemo`, `useCallback` thực sự làm gì — và vì sao 90% trường hợp dùng sai?
- React render ra màn hình theo các bước nào? Fiber là gì?
- Vì sao danh sách bắt buộc cần `key`, và vì sao dùng `index` làm key lại sinh bug?
- Làm sao tổ chức code bằng pattern thay vì copy-paste logic?

<Callout type="info" title="Important">

Mục tiêu của blog không phải "học thuộc API" mà là xây **mô hình tư duy (mental model)** đúng về cách React hoạt động. Khi mental model đúng, bạn tự suy ra được API nên dùng, không cần nhớ máy móc.

</Callout>

---

## Tư duy xuyên suốt

Toàn bộ blog xoay quanh một công thức duy nhất:

```
UI = f(state)
```

Giao diện là **kết quả của một hàm thuần** áp lên state. Bạn không "sửa DOM", bạn chỉ **mô tả** UI ứng với state hiện tại, còn React lo việc biến mô tả đó thành thao tác DOM tối thiểu.

Từ công thức này suy ra 3 nhóm chủ đề:

```d2 title="Tư duy xuyên suốt — sơ đồ 1"
direction: right
A: "UI = f(state)"
B: "1. React chạy f() như thế nào?\n(Internals)"
C: "2. Làm sao gọi f() ít lại\nkhi không cần?\n(Tối ưu re-render)"
D: "3. Tổ chức f() sao cho\ntái dùng & dễ bảo trì?\n(Patterns)"
A -> B
A -> C
A -> D
```

---

## Bản đồ nội dung

<Cards>
  <Card href="/react-internals/render-pipeline/" title="React Internals">
    Render pipeline, Fiber, reconciliation, vì sao re-render, và vì sao list cần key.
  </Card>
  <Card href="/toi-uu-rerender/tong-quan-toi-uu/" title="Tối ưu Re-render">
    memo, useMemo, useCallback, referential equality, tối ưu Context, code-splitting.
  </Card>
  <Card href="/patterns/composition/" title="React Patterns">
    Composition, custom hooks, compound components, render props, provider, state reducer.
  </Card>
  <Card href="/interview-questions/khi-nao-react-quyet-dinh-rerender/" title="Câu hỏi phỏng vấn">
    Luyện cách trả lời ngắn gọn, chính xác và xử lý các câu hỏi đào sâu về React.
  </Card>
</Cards>

### Thứ tự đề xuất

<Steps>
  <Step>
    ### Hiểu máy chạy thế nào
    Đọc nhóm **React Internals** trước. Không hiểu render pipeline & Fiber thì mọi mẹo tối ưu chỉ là học vẹt.
  </Step>
  <Step>
    ### Học cách tối ưu đúng chỗ
    Đọc nhóm **Tối ưu Re-render**. Nắm được "khi nào nên tối ưu" quan trọng hơn biết API.
  </Step>
  <Step>
    ### Tổ chức code chuyên nghiệp
    Đọc nhóm **Patterns** để biết cách chia logic tái dùng được, hết copy-paste.
  </Step>
</Steps>

---

## Danh sách đầy đủ các bài

**React Internals — React chạy `f()` thế nào**

| Bài                                                                       | Nội dung cốt lõi                                          |
| ------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Render Pipeline](/react-internals/render-pipeline/)                      | Ba pha render → commit → paint; trigger → render → commit |
| [Fiber & Reconciliation](/react-internals/fiber-reconciliation/)          | Cây Fiber, work loop, lanes, double buffering, bailout    |
| [Vì sao component re-render](/react-internals/vi-sao-component-rerender/) | state đổi, cha render, context đổi — và những hiểu lầm    |
| [Key trong list](/react-internals/key-trong-list/)                        | Vì sao cần key, vì sao index làm key sinh bug             |

**Tối ưu Re-render — gọi `f()` ít lại khi không cần**

| Bài                                                            | Nội dung cốt lõi                                         |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| [Tổng quan tối ưu](/toi-uu-rerender/tong-quan-toi-uu/)         | Khi nào nên (và KHÔNG nên) tối ưu; đo trước khi sửa      |
| [Referential Equality](/toi-uu-rerender/referential-equality/) | stack vs heap, Object.is, vì sao tham chiếu mới phá memo |
| [React.memo](/toi-uu-rerender/react-memo/)                     | So props nông, khi nào memo có tác dụng / vô dụng        |
| [useMemo & useCallback](/toi-uu-rerender/usememo-usecallback/) | Cache giá trị/hàm theo deps; cạm bẫy & giới hạn          |
| [Tối ưu Context](/toi-uu-rerender/context-optimization/)       | Vì sao consumer re-render, tách context, selector        |
| [Code-splitting](/toi-uu-rerender/code-splitting/)             | lazy/Suspense, next/dynamic, tránh waterfall chunk       |

**Patterns — tổ chức `f()` tái dùng & dễ bảo trì**

| Bài                                                   | Nội dung cốt lõi                                       |
| ----------------------------------------------------- | ------------------------------------------------------ |
| [Composition](/patterns/composition/)                 | children/slot, inversion of control, vs HOC            |
| [Custom Hooks](/patterns/custom-hooks/)               | Trích logic tái dùng, ghép hook, Rules of Hooks        |
| [Compound Components](/patterns/compound-components/) | API kiểu `<Tabs><Tab/>`, controlled/uncontrolled       |
| [Render Props & HOC](/patterns/render-props/)         | Hai pattern tiền-hook, wrapper hell, vì sao hook thắng |
| [Provider Pattern](/patterns/provider-pattern/)       | Đóng gói Context + hook type-safe, persistence         |
| [State Reducer](/patterns/state-reducer/)             | useReducer, đảo quyền điều khiển transition            |

**Câu hỏi phỏng vấn — trả lời ngắn gọn nhưng đúng bản chất**

| Bài                                                                                                 | Nội dung cốt lõi                                                                         |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Khi nào React quyết định re-render?](/interview-questions/khi-nao-react-quyet-dinh-rerender/)      | Trigger, bailout, render vs commit và các câu hỏi gài thường gặp                         |
| [Controlled và uncontrolled component](/interview-questions/controlled-va-uncontrolled-components/) | Quyền sở hữu state của form, `value`/`defaultValue`, ref, FormData và các bẫy thường gặp |
| [Dependency array của các Hooks](/interview-questions/dependency-array-cua-cac-hooks/)              | Reactive value, stale closure, exhaustive-deps và cách thiết kế Effect đúng              |

---

## Bảng thuật ngữ

| Thuật ngữ                | Nghĩa ngắn gọn                                                          |
| ------------------------ | ----------------------------------------------------------------------- |
| **Render**               | React gọi component để tính ra mô tả UI (element tree) — chưa chạm DOM  |
| **Commit**               | React áp các thay đổi đã tính vào DOM thật                              |
| **Reconciliation**       | Quá trình so cây element mới với cũ để tìm thay đổi tối thiểu           |
| **Fiber**                | Đơn vị công việc nội bộ; mỗi component có một node fiber giữ state/hook |
| **Bailout**              | React bỏ qua re-render một nhánh vì không có gì đổi                     |
| **Referential equality** | So sánh hai tham chiếu (`Object.is`) — nền tảng của mọi memo/hook       |
| **Memoization**          | Lưu lại kết quả/tham chiếu để tái dùng khi input không đổi              |
| **Inversion of control** | Giao quyền quyết định (render gì, transition ra sao) cho nơi dùng       |

---

## Cách đọc hiệu quả

<Callout type="info" title="Tip">

Mỗi bài đều có ví dụ code **chạy được** và bảng/sơ đồ minh hoạ. Hãy mở một sandbox (CodeSandbox, StackBlitz) và gõ lại từng ví dụ — đọc suông sẽ quên rất nhanh.

</Callout>

- Phiên bản tham chiếu: **React 19** (kèm ghi chú khác biệt với React 18 khi cần).
- Code mẫu dùng function component + hooks. Không dùng class component trừ khi minh hoạ lịch sử.
- Khi gặp thuật ngữ tiếng Anh (reconciliation, bailout, ...) bài sẽ giải thích lần đầu rồi giữ nguyên — vì đó là từ bạn sẽ gặp trong tài liệu & lỗi thật.
