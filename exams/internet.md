### 计算机网络知识考核题

- 1. 关于 HTTP 缓存说法正确的是：B

  - A. max-age 是协商缓存
  - B. cache-control: private 是希望代理服务器不要缓存
  - C. expires 是协商缓存
  - D. etag 是基于内容时间的协商缓存
    - cache-control 和 expires 是强缓存，若命中，浏览器返回 200；If-Modified-Since 或 If-No-Match，分别返回 Last-Modified 或 Etag，是协商缓存（需要请求服务器），若命中，服务器会返回 304，且不返回资源内容，由浏览器直接从缓存获取，若未命中，服务器会返回资源的实际内容，并更新 header 中的相关缓存字段。
    - A：max-age 是强缓存，错；B，cache-control:private 仅发起请求的浏览器可缓存，public：经过的代理服务器及客户端都可对内容进行缓存，no-cache：本地和代理服务器可缓存，但需要到服务器去验证，验证命中后才可使用缓存，对；C: expires 是强缓存，错；D: etag 不是根据内容时间进行缓存，而是采用一串编码标记内容，错

- 2. 之前有一张图片通过 CDN 发布，现在想换一张，如何做比较好？C

  - A. CDN 修改图片地址，利用 CDN 后台操作
  - B. 去线上服务器覆盖之前的图片 ×
  - C. 用新图片替换旧图片，修改关联的 html 和 css
  - D. 重置所有 CDN ×

- 3. 如果网络延迟是 30ms，那么 Ping 一个网站需要多少 ms? B

  - A. 30ms
  - B. 60ms
  - C. 90ms
  - D. 120ms

- 4.  通常情况下目前一个浏览器 Tab 页最多开多少个 TCP 链接？C

  - A. 2 个
  - B. 4 个
  - C. 6 个
  - D. 8 个

- 5.  以下说法中错误的是：A
  - A. TCP/IP 协议属于网络层
  - B. TCP、UDP 协议都要通过 IP 协议来发送、接收数据
  - C. TCP 协议提供可靠的面向连接服务
  - D. UDP 协议提供简单的无连接服务
    - TCP/IP 协议严格来说是四层的体系结构，应用层、传输层、网络层和数据链路层都包含其中。
- 6.  为什么需要三次握手？A
  - A. 传输层连接的建立
  - B. 数据链路层的流量控制
  - C. 传输层的重复检测
  - D. 传输层的流量控制
- 7.  在 Internet 上浏览时，浏览器和服务器之间传输网页使用的协议是 B
  - A. IP
  - B. HTTP
  - C. FTP
  - D. Telnet
- 8.  路由能力由哪层提供？C

  - A. 物理层
  - B. 数据链路层
  - C. 网络层
  - D. 应用层

- 9.  在以太网中，是根据\_\_\_地址来区分不同的设备的：B
  - A. LLC 地址
  - B. MAC 地址
  - C. IP 地址
  - D. IPX 地址
- 10. 世界上第一个计算机网络是：A

  - A. ARPANET
  - B. ChinaNet
  - C. Internet
  - D. CERNET

- 11. 问答题 （15 分） 正向代理和反向代理有什么区别？
  - 两者都是在客户端和服务端之间架设一个代理服务器，正向代理是客户端向真实的服务器发送请求，代理服务器拦截请求并转发，拿到服务器响应后返回给客户端；而反向代理服务器接收到客户端请求，代理服务器会自己寻找服务器获取响应并返回。他们的最大区别是：正向代理隐藏了客户端 IP，而反向代理隐藏了目标服务器 IP
  - 正向代理代理的是客户端，代理服务器帮忙转发请求，访问客户端无法访问的资源；反向代理代理的是服务端，帮助服务端做负载均衡和安全防护
  - 正向代理的代理服务器一般是客户端架设，反向代理的代理服务器一般是服务端架构
  - 正向代理中，服务端不知道真正的客户端是谁（比如翻墙软件），反向代理中，客户端不知道真正的服务端是谁（比如 vue-config 中的服务端域名代理）
- 12. 问答题 （15 分） Http2.0 有哪些进步？

  - 使用多路复用，一个连接可以有多个请求，且每个连接的请求可以随机混杂在一起
  - 使用新的二进制格式，http1.x 的解析基于文本，而 http2.0 采用二进制，实现方便且健壮
  - 请求头压缩，减少传输的 header 大小，且避免了重复 header 的传输
  - 服务端推送

- 13. 问答题 （10 分） 请简述 CDN 的工作原理

  - CDN 的基本原理是广泛应用各种缓存服务器，将缓存服务器分布在用户访问相对较集中的地区或网络中，当用户访问网站时，可以利用全局负载技术将用户的访问指向距离最近的响应速度最快且工作正常的缓存服务器上，由该缓存服务器直接响应用户的请求。

- 14. 问答题 （10 分） 简述 TCP 协议的三次握手过程
  - TCP 的三次握手是客户端和服务端需要发送 3 个包来确认连接的建立
  - 第一次握手：客户端将标志位 SYN 置为 1，随机生成一个 seq=J 发给服务端，客户端进入 SYNC_SENT 状态，等待服务端确认；
  - 第二次握手：服务端收到数据包后由 SYN=1 知道客户端请求建立连接，服务端将标志位 SYN 和 ACK 都置为 1，ack=J+1,随机生成一个 seq=K，并将数据包发给客户端来确认连接请求，服务端进入 SYN_RECD 状态；
  - 第三次握手：客户端收到确认后，检查 ack 是否是 J+1，ACK 是否是 1，正确则连接建立成功，客户端和服务端都进入 ESTABLISHED 状态，完成三次握手，然后客户端和服务端就可以开始传输数据了。