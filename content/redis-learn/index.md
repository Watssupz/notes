---
title: "Redis Learning"
description: "Tài liệu học Redis tiếng Việt — Kiến trúc, Cấu trúc dữ liệu, Lưu trữ bền vững, Cụm phân tán và Caching patterns"
---

# Redis Learning - Mục lục

Tài liệu học Redis tiếng Việt — Next.js + Fumadocs, deploy trên Cloudflare Pages.

---

## Fundamentals

- [x] [Redis Overview](/redis-learn/fundamentals/redis-overview) - Redis là gì, in-memory data store, use cases, khi nào nên/không nên dùng
- [x] [Redis Architecture](/redis-learn/fundamentals/redis-architecture) - Event loop, single-threaded execution, command lifecycle, keyspace internals
- [x] [Keys, Naming & TTL](/redis-learn/fundamentals/keys-and-ttl) - Key design, namespace, TTL, expire behavior, hot keys và big keys

## Data Structures

**Lộ trình đọc (sidebar theo thứ tự này):** Strings → Hashes → Lists → Sets → Sorted Sets → Bitmaps & HLL → Geospatial → **Streams** (nên đọc **sau [Lists](/redis-learn/data-structures/lists)** — queue đơn giản trước, log có ack/replay sau).

- [x] [Strings](/redis-learn/data-structures/strings) - GET/SET, INCR/DECR, TTL, bit operations, use cases counter và cache
- [x] [Hashes](/redis-learn/data-structures/hashes) - HSET/HGETALL, object storage, field-level operations, memory efficiency
- [x] [Lists](/redis-learn/data-structures/lists) - LPUSH/RPUSH, LRANGE, blocking operations (BLPOP), queue patterns
- [x] [Sets](/redis-learn/data-structures/sets) - SADD/SMEMBERS, set operations (union, intersect, diff), random members
- [x] [Sorted Sets](/redis-learn/data-structures/sorted-sets) - ZADD/ZRANGE, score-based ranking, leaderboard, range queries
- [x] [Bitmaps & HyperLogLog](/redis-learn/data-structures/bitmaps-hyperloglog) - SETBIT/BITCOUNT, PFADD/PFCOUNT, đếm unique với memory tối thiểu
- [x] [Geospatial](/redis-learn/data-structures/geospatial) - GEOADD/GEOSEARCH, tìm kiếm theo vị trí, radius queries
- [x] [Streams](/redis-learn/data-structures/streams) - XADD/XREAD, consumer groups, event sourcing; đọc sau Lists, so sánh Pub/Sub/Kafka

## Persistence

- [x] [RDB Snapshots](/redis-learn/persistence/rdb) - Point-in-time snapshots, SAVE vs BGSAVE, fork và copy-on-write
- [x] [AOF](/redis-learn/persistence/aof) - Append Only File, fsync policies, AOF rewrite, recovery
- [x] [Persistence Strategies](/redis-learn/persistence/persistence-strategies) - So sánh RDB vs AOF vs hybrid, chọn strategy theo use case

## Replication & High Availability

- [x] [Replication](/redis-learn/replication/replication) - Master-replica, full sync vs partial sync, replication offset, read scaling
- [x] [Redis Sentinel](/redis-learn/replication/sentinel) - Automatic failover, quorum, sentinel discovery, client integration
- [x] [Redis Cluster](/redis-learn/replication/cluster) - Sharding với hash slots, cluster topology, resharding, multi-key operations

## Performance

- [x] [Memory Management](/redis-learn/performance/memory-management) - maxmemory, memory usage analysis, encoding optimizations, fragmentation
- [x] [Eviction Policies](/redis-learn/performance/eviction-policies) - LRU vs LFU vs TTL-based, noeviction, chọn policy phù hợp
- [x] [Pipelining & Batching](/redis-learn/performance/pipelining-batching) - Round-trip time, pipeline vs transaction vs script, batching best practices
- [x] [Benchmarking](/redis-learn/performance/benchmarking) - redis-benchmark, latency monitoring, đo throughput thực tế
- [x] [Slow Log & Latency](/redis-learn/performance/slow-log-latency) - SLOWLOG, latency spikes, big keys, hot keys, debug performance

## Patterns & Use Cases

- [x] [Caching Patterns](/redis-learn/patterns/caching-patterns) - Cache-aside, write-through, write-behind, cache stampede, TTL strategies
- [x] [Request Coalescing](/redis-learn/patterns/request-coalescing) - Chống cache stampede với singleflight, Redis lease, timeout và hai mức TTL
- [x] [Session Store](/redis-learn/patterns/session-store) - Lưu session với TTL, Spring Session, serialization
- [x] [Rate Limiting](/redis-learn/patterns/rate-limiting) - Fixed window, sliding window, token bucket với Redis
- [x] [Leaderboard & Counting](/redis-learn/patterns/leaderboard-counting) - Sorted set leaderboard, real-time ranking, counting patterns
- [x] [Distributed Lock](/redis-learn/patterns/distributed-lock) - SET NX, lock expiry, Redlock algorithm, fencing tokens
- [x] [Pub/Sub](/redis-learn/patterns/pub-sub) - PUBLISH/SUBSCRIBE, pattern matching, so sánh với Streams, giới hạn

## Advanced

- [x] [Transactions](/redis-learn/advanced/transactions) - MULTI/EXEC, WATCH optimistic locking, giới hạn so với DB transactions
- [x] [Lua Scripting](/redis-learn/advanced/lua-scripting) - EVAL/EVALSHA, atomicity, script caching, khi nào dùng Lua
- [x] [Keyspace Notifications](/redis-learn/advanced/keyspace-notifications) - Event notifications, expired events, config và use cases
- [x] [Client-Side Caching](/redis-learn/advanced/client-side-caching) - Tracking mode, invalidation, RESP3 protocol
- [x] [Redis Modules](/redis-learn/advanced/redis-modules) - RedisJSON, RediSearch, RedisBloom, Redis Stack overview

## Operations

- [x] [Security](/redis-learn/operations/security) - AUTH, ACL, TLS, protected mode, network security best practices
- [x] [Monitoring](/redis-learn/operations/monitoring) - INFO metrics, redis_exporter + Prometheus + Grafana, alerts quan trọng
- [x] [Backup & Restore](/redis-learn/operations/backup-restore) - RDB backup strategies, restore procedures, disaster recovery
- [x] [Troubleshooting](/redis-learn/operations/troubleshooting) - Common issues, OOM, connection limits, debug checklist

---

## Phát triển webapp

Cần **Node.js 22+**. Nội dung gốc là các file `.md` ở root; không sửa `content/docs/` vì thư mục này được sinh lại từ README.

```bash
npm ci
npm run dev
npm run build       # static export → dist/
npm run typecheck
```

### Diagram và component docs-kit

Webapp dùng [`@vanhiep99w/docs-kit`](https://www.npmjs.com/package/@vanhiep99w/docs-kit). D2 render thành SVG light/dark **lúc build**; không đưa compiler/WASM vào browser. Nút **Explore diagram** tải viewer khi cần để zoom, pan, mở rộng, xem/copy D2 và tải SVG. Có thể đọc diagram/source khi tắt JavaScript.

````md
```d2 title="Application đọc cache"
direction: right
app: Application
redis: Redis {icon: https://icons.d2lang.com/dev/redis.svg}
db: Database {shape: cylinder}
app -> redis: GET / SET với TTL
app -> db: Query khi cache miss
```
````

- Thêm `mode=steps` cùng `steps: { ... }` khi cần diễn giải nhiều trạng thái; xem [Cluster](./cluster.md) và [Sentinel](./sentinel.md).
- Với luồng dài cần giữ chữ rõ, đặt `scale=1` trong fence và thêm dòng `# viewport: readable` trong source D2; xem [Luồng điều phối](./request-coalescing.md#luồng-điều-phối). Adapter riêng của site (`src/components/d2-diagram.tsx`) cho cuộn dọc theo bài, cuộn ngang trên màn hình hẹp và đưa node đầu vào vùng nhìn khi viewer tải xong. Không phải option của docs-kit; diagram khác vẫn auto-fit như cũ.
- Icon từ [D2 Icons](https://icons.d2lang.com/) nên lưu local và ghi nguồn. Icon Redis đã được vendor trong `public/icons/d2/`; script prepare rewrite URL trong fence D2, plugin nhúng icon vào SVG. Thêm icon mới phải bổ sung mapping tương ứng.
- Không dùng fence `diagram` hay Mermaid: sơ đồ cấu trúc file, memory layout, cây dữ liệu, luồng và sequence đều được cân nhắc D2, không phụ thuộc nhãn fence cũ.
- Giữ log, RESP payload, công thức/phép tính bit và literal cần căn vị trí ở dạng text. Bảng so sánh, checklist và cheat sheet dùng Markdown thay vì đóng khung ASCII. Ngoại lệ ASCII cần ghi lý do ngay trước fence: `<!-- diagram-text: Lý do cần giữ vị trí ký tự. -->`.
- Cache D2 nằm ở `.next/cache/docs-kit/d2`, không deploy cache. Trên Cloudflare Pages, bật **Build cache** trong dashboard; kiểm tra log restore cache thực tế.
- Chỉ build D2/descriptor tin cậy trong repository. SVG được nhúng trực tiếp; các component không thực thi Redis command, Lua hay shell.

Các fence bổ sung đã đăng ký, không cần JSX/import riêng trong từng bài:

| Fence              | Dùng khi                                              | Ví dụ trong repo                                                   |
| ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------ |
| `terminal-session` | Transcript từng command/output, copy không kèm prompt | [Overview](./redis-overview.md), [Transactions](./transactions.md) |
| `code-diff`        | So sánh code/config trước và sau                      | [Safe release lock](./distributed-lock.md)                         |
| `code-walkthrough` | Đọc code theo bước và highlight range                 | [Redis Function](./lua-scripting.md)                               |
| `span-waterfall`   | Timeline latency; ghi rõ minh họa hay đo thực tế      | [Slow Log & Latency](./slow-log-latency.md)                        |

Không bật Source Explorer hoặc Protocol Exchange chỉ để có thêm component: hiện chưa có project source registry hoặc transcript HTTP phù hợp. Chỉ tích hợp khi có nội dung thực sự cần chúng.

### Kiểm thử static export và trình duyệt

```bash
npm run test:docs                  # parser audit + regression tests
npm run build                      # tự chạy test:docs trước build
npx playwright install chromium     # lần đầu, nếu chưa có browser
npm run test:browser
# Hoặc dùng Chrome đã cài trên máy:
CHROME_PATH=/usr/bin/google-chrome npm run test:browser
```

`test:docs` dùng Markdown AST để bắt fence cũ (`diagram`, Mermaid…), ASCII chưa review, khối không nhãn, fence `~~~` và diagram lồng blockquote/list — không chỉ grep `text`. Có thể xem danh sách text còn giữ bằng `node scripts/audit-diagrams.mjs --list-text`.

Browser tests kiểm tra mọi fence trong static export, cấu trúc `dump.rdb`, D2 zoom/download/theme/steps, copy command, walkthrough/diff/waterfall, mobile và fallback không JavaScript. Chạy lại build trước khi test nếu nội dung thay đổi.
