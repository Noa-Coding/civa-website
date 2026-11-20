# Civa 隐私政策 / Civa Privacy Policy

**更新及生效日期：2026 年 11 月 20 日 / Updated and effective: November 20, 2026**

**政策版本：2026-11-20（含 App 1.2 功能说明） / Policy version: 2026-11-20 (including App 1.2 data practices)**

## 中文版

本政策说明当前服务及 App 1.2 的信息处理方式。功能是否可用以您安装的版本及实际开放状态为准；说明某项功能不代表它已向所有用户发布。可选功能仅在您使用或开启时处理相应内容。

### 1. 我们是谁

Civa（以下简称“本 App”）由徐炀薇（以下简称“我们”）提供。我们重视您的隐私，并以本政策说明本 App 如何处理与您有关的信息。

**开发者信息**

- 产品名称：刺饭 Civa
- 开发者及个人信息处理者：徐炀薇
- 联系邮箱：support@civakitchen.site

### 2. 本 App 的核心原则

Civa 是一款本地优先的菜谱、菜单与厨房记录 App，不提供独立的 Civa 账号注册或登录，不接入广告 SDK、分析 SDK、追踪 SDK；我们不会出售您的个人信息，也不会将您的信息用于定向广告或跨 App/网站追踪。用户主动使用联网分享和问题反馈时会访问开发者运营的服务器，本地厨房不会因此自动整库上传。

除本政策第 5 节所述的可选系统语音识别功能，您主动开启第 6.1 节的 iCloud 同步、提交第 6.2 节的问题反馈、使用第 6.7 节的共享厨房，以及您主动使用联网分享、系统分享、备份导出、导入或打开外部链接外，您在本 App 中创建和保存的内容仅存储在您的设备中，我们不会接收这些内容。

### 3. 我们在您的设备上处理的信息

为提供菜谱、菜单、冰箱和个人资料功能，本 App 会在您的设备本地保存下列信息：

- 您主动填写的显示名称；
- 您主动添加的头像、菜品照片和做法配图；
- 菜名、食材、做法、备注、自定义标签、菜谱链接、菜品状态及创建/修改时间；
- 菜单计划、用餐历史、冰箱食材、保质期和相关日期；
- 食材数量与单位、菜谱用量、做饭消耗确认、库存估算及调整记录、厨房的自动估算设置；
- 采购清单、食材使用记录、食记及外食记录（含您自行填写的地点文字，不读取系统定位）；
- 未完成的菜品编辑草稿，用于误关或强退后的恢复，成功保存或明确放弃后删除，不通过 Civa 服务器或 App 的 CloudKit 同步主动上传；系统设备备份另适用系统规则；
- 个人厨房、食记与外食照片及采购入库记录；
- 您选择的语言、背景音乐、界面外观及当前厨房等偏好设置；
- 为使本地数据正常关联而生成的本地随机标识符。

这些信息用于在设备上展示、编辑、整理、备份和恢复您的内容。除您主动选择的联网功能外，我们不将其上传至我们的服务器；我们也不会据此分析您的使用行为或向您投放广告。

### 4. 权限与可选功能

本 App 仅在您主动使用相应功能时请求以下系统权限。您可以不授予权限，或随时在 iOS“设置”中撤回；撤回后，相应功能将不可用，但其他不依赖该权限的功能仍可使用。

| 权限或能力 | 使用场景 | 信息处理方式 |
| --- | --- | --- |
| 相机 | 拍摄菜品照片或头像 | 图片由您确认后保存到设备本地。 |
| 照片选择器/照片库写入 | 从照片库选择图片；将您生成的菜谱图片保存到照片库 | 选择或保存本身不向 Civa 服务器传图；您另行选择联网分享、开启 iCloud 或使用共享厨房时，按第6.1、6.3、6.7节处理相关图片。 |
| 麦克风与语音识别 | 将您主动说出的内容转写为菜谱、做法或备注文本 | 录音仅在转写期间使用，Civa 不保存原始录音。转写出的文本在您确认后保存到设备本地。详见第 5 节。 |
| 文件选择器 | 导出或导入 `.civa` / JSON 备份 | 导出由您选择保存位置；导入仅在您选择文件后读取。导入或导出本身不会把备份文件发送给我们。 |

### 5. Apple 语音识别服务

当您主动启用语音输入时，本 App 会在系统授权后访问麦克风并调用 Apple 的 Speech 框架进行语音转写。Apple 的开发者文档说明，`SFSpeechRecognizer` 语音识别可能涉及将语音数据发送至 Apple 服务器处理；即使某些设备或语言可使用设备端识别，我们也不承诺所有情形均在设备端完成。

因此，请仅在您同意 Apple 按其适用条款和隐私政策处理该语音数据时使用语音输入。Civa 不会接收或留存原始语音录音；Apple 作为独立服务提供方对其处理活动适用其自身的隐私政策：<https://www.apple.com/legal/privacy/>。

### 6. 您主动选择的分享、备份与外部链接

- **系统分享：** 您可以生成菜单图片并通过 iOS 系统分享面板发送给您选择的 App、联系人或服务。分享发生前由您选择接收方；接收方对信息的处理适用其自身规则，我们无法控制。
- **问题诊断（适用于提供此功能的版本）：** 您可主动生成包含 App／系统版本、数据数量、厨房标识摘要以及最近启动／保存／恢复购买结果与错误代码的本机诊断文件。文件不含菜名、照片、菜谱正文、个人资料、链接或分享凭证。诊断报告只读取最近7天、最多200条事件；下次记录时淘汰旧事件。每次生成报告时清理超过7天或数量上限的旧导出缓存，生成后最多保留3份；不运行时不保证即时清理磁盘文件。不会自动上传。只有您选择系统分享后，文件才会交给您指定的接收方，分享后的副本由您与接收方管理。
- **备份导出：** 您可以将当前厨房数据导出为 `.civa` 或 JSON 文件。备份可能包含本政策第 3 节列出的内容，包括图片和菜谱记录。请谨慎选择保存位置和分享对象；导出本身不会把文件发送给我们；若您另行通过邮件向我们提供文件，我们会为处理该请求接收相应内容，邮件保存与删除适用第6.2节。
- **备份导入：** 您选择导入的备份文件仅用于在本机恢复或替换相应厨房数据。请勿导入来源不明的文件。
- **外部菜谱链接：** 您主动识别或导入链接时，App 可直接请求来源网站的网页及展示所需资源；主动打开链接时由浏览器、Safari 或相应 App 处理。来源站点会接收到必要 IP、请求地址等网络信息，适用其政策；不会因此收到整个厨房。剪贴板只在您主动粘贴时读取。

### 6.1 可选 iCloud 多设备同步

iCloud 同步默认关闭。您主动开启后，个人厨房的菜谱、菜品及做法照片、计划、冰箱分类与标签、采购、食材数量与单位、菜谱用量、消耗与估算记录及相关厨房设置、饮食记录、外食照片、菜谱卡和个人资料会通过 Apple CloudKit 保存到您的 iCloud 私有数据库，并与同一 Apple 账户的设备合并。开发者不运营用于保存这些内容的同步服务器，不将这些内容用于广告或分析。语言、音乐及界面偏好仍是本机设置。本节的个人同步仅用于同一 Apple 账户；不同账户之间的共享厨房另见第6.7节。

App 使用 CloudKit 提供的、仅在本容器内识别账号的标识来防止账号切换后误传数据；不读取您的 Apple 账户密码或电子邮件。退出或更换账号时暂停同步，保留本机内容，不自动上传给新账号。您可随时关闭同步；关闭不会删除已经保存在本机或 iCloud 的内容。离线或 iCloud 配额不足时，修改仍保存在本机，联网且空间可用后重试。同步不是历史版本备份；联网同步成功后的删除会传播到其他设备。卸载 App 不会自动删除 iCloud 中的数据。

为处理设备间不同修改，App 会在本机保留合并前的 .civa 副本，您可从同步设置导出。副本留在 App 沙盒内，卸载会删除；自行导出的副本需由您在相应保存位置管理。Apple 的储存、服务及相关处理适用其服务条款和隐私政策。

同步设置另提供“清除 iCloud 云端副本”：明确确认后清除当前账号下 Civa 的云端厨房副本并暂停同步，默认保留本机内容。其他设备联网后依据清除标记暂停，不会在未再次确认的情况下自动重新上传旧内容；较旧客户端可能需要更新后才能继续。重新开启并明确确认上传本机内容，可能再次创建此前清除的内容。清除不删除其他设备本地内容、自行导出的文件或 Apple 自有备份，不承诺第三方服务物理擦除的具体时间。清除中断时继续暂停并提示重试，不把未确认完成显示为成功。

冲突副本按轮次保留，可逐份导出和明确删除，不静默到期清理。同步只恢复已成功上传的数据，首次下载和多端传播需要联网及系统调度，不承诺即时、永不丢失或卸载前的全部内容均可恢复。图片裁剪与主体提取在本机完成，不做身份识别；个人同步及完整 .civa 备份可包括编辑源图和编辑内容。

### 6.2 主动提交问题反馈

仅当您点击“提交反馈”时，反馈类型、您填写的正文、可选联系邮箱、Civa 版本与构建号，以及随机提交编号会通过 HTTPS 发送到我们在腾讯云运营的服务器，再通过加密 SMTP 发送至 support@civakitchen.site 腾讯企业邮箱，仅用于处理和回复反馈。不填写邮箱也可以提交。此功能不自动附带菜谱库、照片、设备标识、运行日志或 iCloud 内容；请不要在正文中填写密码等敏感信息。

为防止滥用与重复发送，服务器处理请求来源 IP 并保存不能直接读出原 IP 的 HMAC 限流摘要，以及提交摘要、编号、时间、状态与计数，不将正文或邮箱写入反馈控制文件。限流摘要窗口为一小时，提交状态窗口为24小时，运行中每分钟清理到期记录；停机或磁盘错误时清理可能延迟。邮件正文与可选邮箱仍保存在开发者收件邮箱中，不会随卸载 App 自动删除；您可联系上述邮箱请求处理相关反馈内容。

腾讯云及腾讯企业邮箱参与网络传输和邮件处理。小红书提示只是静态文字，App 不会因此向小红书发送信息；您自行前往小红书反馈时适用其平台规则。反馈及回复邮件用于处理问题和必要的后续联系。目前邮箱尚未启用统一的到期自动删除机制，删除请求由开发者核验后人工处理；卸载 App 不会触发邮件删除。我们不会把邮件用于营销。

### 6.3 联网菜谱分享与点菜邀请

只有您主动创建联网分享时，才会把选中的菜名、食材、做法、备注、菜谱链接和展示所需的压缩／透明图片等发送到 Civa 的腾讯云服务器；点菜邀请仅发送候选菜展示所需内容，不发送整个厨房。公开分享不上传完整私有图片编辑源图。本地生成图片和导出文件不因生成本身上传至该服务器。

新点菜邀请自创建起3天有效，菜谱分享自创建起7天有效；旧链接沿用创建时确定的原有效期。任何持有有效链接的人都可查看并继续转发，无法保证仅指定朋友可看。分享是创建时副本，本地后续编辑、删除或卸载不会自动修改或撤销。点菜者可填写昵称并提交所选菜品及时间，仅邀请发起者可查结果，其他访客只能收到自己的提交确认，不建立跨邀请访客画像。

发起者可在“分享中心 → 管理分享”撤销本机仍持有管理凭证的分享。独立管理凭证保存在本机设备专用钥匙串，不在访客链接中传递、不随 .civa 或 iCloud 迁移，也不保证卸载重装或更换设备后仍可管理。旧邀请没有独立凭证时不再开放结果查询，须重新创建；旧链接的人工投诉或删除请求可联系 support@civakitchen.site，经必要核验处理，不能仅凭访客链接认定创建者身份。

到期或撤销后立即停止服务器上的相关内容、结果和无其他有效引用图片的访问。停止访问不等于立即物理擦除。在线副本由运行中的清理任务回收；图片回收包含上传保护窗口和定期扫描，停机或故障可能延迟，尚有有效分享引用的去重图片可保留至最后有效引用消失及上传保护窗口结束。接收方已保存的图片或菜谱不能由我们远程撤回。

### 6.4 App Store 更新检查（1.1 新增）

进入厨房或回到前台时，App 最多每天向 Apple 的公开 App Store 查询接口检查一次已发布版本。请求包含刺饭的公开 App ID 和 App Store 店面国家代码，不附带菜谱、照片、备份、反馈、iCloud 内容或用户标识。Apple 在提供网络服务时会接收 IP 地址等必要连接信息，适用其隐私政策。检查时间、已提醒版本及提醒时间仅保存在本机；可选择稍后更新，查询失败不影响本地使用。此请求不经过 Civa 的服务器。

### 6.5 Apple 购买与装扮权益

小铺装扮通过 Apple App Store 的应用内购买处理，价格以购买确认页为准。App 使用 StoreKit 在本机验证购买状态、刷新权益和响应退款／撤销，并支持同一 App Store 账户恢复购买。我们不读取支付卡号或 Apple 账户密码，不向 Civa 服务器发送交易凭证或购买历史。付款和 Apple 的交易记录由 Apple 按其政策处理。装扮收藏及当前选择保存在本机；.civa 厨房备份不包含购买权益，导入备份不等于取得购买资格。

### 6.6 服务商、地区与政策网站

- 腾讯云：自有分享与反馈服务器位于上海地域。适用 [腾讯云隐私声明](https://cloud.tencent.com/document/product/301/11470)，该地域不代表所有第三方传输节点都位于上海。
- 腾讯企业邮箱：承接反馈及回复，适用[腾讯企业邮隐私保护指引](https://exmail.qq.com/cgi-bin/readtemplate?t=bizmail_privacy)；通过企业微信登录的邮箱服务同时适用其指引中列明的企业微信规则。供应商的存储和备份处理适用其条款。
- Apple iCloud／CloudKit 及 Speech：适用 [Apple 隐私政策](https://www.apple.com/legal/privacy/)；中国大陆相关 iCloud 服务适用 [Apple／云上贵州安排](https://support.apple.com/zh-cn/121767)。不统一声称所有 iCloud 内容均境内存储或由开发者端到端加密。
- 政策网站托管于 Cloudflare Pages，访问时托管方会处理必要网络元数据，适用 [Cloudflare 隐私政策](https://www.cloudflare.com/privacypolicy/)。网站请求与 App 厨房上传分别处理。本网站使用设备已有字体，不加载 Google Fonts。网站语言选择仅保存在本机浏览器，不添加广告或行为分析脚本。

### 6.7 您主动创建或加入的共享厨房（1.2 新增）

共享厨房使用 Apple iCloud/CloudKit，使获准加入的成员共同管理同一厨房。创建或加入需要可用的 iCloud 账户；个人厨房不会仅因创建或加入共享厨房而自动整库共享。您主动复制或添加到共享厨房的内容，会成为该共享厨房的内容。

共享内容包括您在该厨房中保存的菜谱及照片、做法、分类与标签、点菜意愿、菜单安排、冰箱和采购记录、食材数量与用量、消耗与库存估算记录，以及在该厨房主动新增的饮食和外食记录。为了展示成员与处理协作，App 还会处理昵称、头像、必要的 CloudKit 账户及成员标识、成员权限，以及创建和修改归属等信息。成员能够看到其权限范围内已同步的内容，并按权限编辑；修改和删除会影响共享厨房中的其他成员。

邀请通过 Apple 的共享能力处理，仅获准的受邀者可加入，不开放任何人持公开链接直接编辑。请谨慎选择邀请对象及分享邀请链接；系统邀请界面展示的信息适用 Apple 的服务规则。Civa 不要求您向开发者提供 Apple 账户密码，也不将 Apple 账户邮箱作为成员昵称展示。

共享数据由 Apple 的云服务处理，并在获准设备上保留使用所需的本地数据；开发者不通过 Civa 的分享或反馈服务器保存整套共享厨房。共享厨房与第6.3节的公开菜谱链接是不同功能；如果您另行创建公开分享，所选内容按第6.3节处理。

个人 iCloud 同步开关与共享厨房分别管理，关闭个人同步不等于退出共享厨房。您可通过厨房管理中的可用操作退出共享厨房；创建者可管理成员或解散厨房。相关操作以云端确认结果为准，离线设备获知权限或内容变化可能延迟。退出或被移除不等于删除其他成员仍可使用的厨房内容，也不能撤回他人已保存、截图或导出的副本。卸载 App 不会自动退出或删除云端厨房。Apple 的存储、备份与删除处理适用其服务规则，不承诺即时物理擦除。

### 6.8 桌面小组件（1.2 新增）

为展示今日食谱、想吃的菜、库存及快捷入口等信息，主 App 与小组件通过本机 App Group 共享必要的数据快照、厨房关联信息和缩略图。这一设备内共享本身不向开发者服务器上传数据；相关厨房的联网同步仍按第6.1或6.7节处理。

添加小组件后，选定厨房的部分内容可能直接显示在系统主屏幕，请结合设备使用环境选择是否添加或移除。小组件刷新受系统调度影响，可能暂时显示旧内容；删除记录、切换厨房或权限变化后，不保证所有组件立即刷新。您可通过系统操作移除小组件，移除本身不会删除厨房内容。

### 6.9 主题菜谱与作者链接（1.2 新增）

浏览或领取主题菜谱时，App 从 Civa 的内容服务器请求菜谱清单及所需图片，并在设备上缓存下载内容。服务器和网络服务商会处理提供下载所必需的网络信息，例如来源 IP、请求地址、时间及响应状态；相关日志处理按第8节说明，不用于广告或跨 App 追踪。请求主题资源本身不要求上传您的个人菜谱库。

您选择领取的菜谱会保存到功能允许的厨房，之后按照该厨房的同步设置处理。主动打开作者主页或菜谱来源链接时，由浏览器或对应第三方 App 处理，对方可接收必要网络信息并适用其自身隐私规则。

### 7. 信息共享、出售与跨境传输

我们不出售、出租或交易您的个人信息；不向广告商、数据经纪商或分析服务商共享您的本地内容；也不实施跨 App 或跨网站追踪。

除非您主动进行第 6 节所述的分享、导出或打开外部链接、开启第 6.1 节的 iCloud 同步、提交第6.2节的问题反馈、使用第6.7节的共享厨房，或主动使用第 5 节所述的 Apple 语音识别服务，Civa 不会将您的内容传输给第三方。因 Apple 语音识别及 iCloud 服务而可能产生的数据传输及其可能的跨境处理，由 Apple 根据其自身条款和隐私政策处理。

### 8. 保存期限与删除

本 App 中的数据会保存在您的设备上，直至您：

- 在 App 内删除对应菜品、照片、记录、厨房或其他内容；
- 使用 App 内的导入替换功能替换相应本地厨房数据；或
- 删除本 App（这通常会删除 App 沙盒内的本地数据）。

请注意，已导出的备份文件、已保存到系统照片库的图片和接收方保存的内容，不随 App 内删除或卸载而自动删除。请在相应位置管理。反馈邮件按第6.2节处理，分享有效期和在线清理按第6.3节处理。开发者保留的部署归档和业务备份仅供故障恢复，目前尚无统一的自动到期删除机制；删除请求需同时核对可控备份，避免恢复时重新公开已删除的内容。

服务器会处理必要的网络运行和安全记录，例如来源 IP、请求时间、请求地址、状态码和错误信息，用于维护服务和防范滥用，不用于广告或用户画像。当前网站服务日志按配置轮转，不宣称已启用统一的七天或六个月清理机制。对于依法必须保留或处理争议所必需的最小记录，我们限制用途和访问；第三方服务自行保存的记录及备份依其规则处理。您可通过第11节渠道询问与您有关的保存情况或提出删除请求。

共享厨房的成员访问与云端内容处理另见第6.7节，小组件本机快照另见第6.8节。删除已同步的共享记录可能影响其他成员，请按界面提示确认。

### 9. 安全

我们采用 iOS 提供的 App 沙盒、本地存储和系统权限机制来限制对本 App 数据的访问。没有任何电子存储方式能够保证绝对安全；请妥善保管您的设备、系统解锁方式和导出的备份文件。

### 10. 未成年人

本 App 不以未成年人为目标用户，也不会明知收集未成年人的个人信息。我们不要求填写出生日期，不能仅凭反馈识别用户年龄。未成年人应在其监护人同意和指导下使用涉及照片、语音、分享、反馈或备份的功能。

### 11. 您的权利与选择

您可以直接在 App 内查看、修改、导出或删除本地内容，并可在 iOS“设置”中管理相机、麦克风和语音识别权限。若您对本政策、权限或本地数据处理有疑问，请通过 support@civakitchen.site 联系我们。

该邮箱也受理访问、复制、更正、删除和撤回可选处理的请求。服务目标为3个工作日内首次回复，必要核验后15个工作日内完成或说明进度；这不是对法律统一期限的表述。仅要求反馈编号、原联系邮箱或管理凭证等最小必要证明，不索取 Apple 密码、手机解锁密码或默认要求身份证照片。开发者不能通过一封邮件直接读取或清空他人的 CloudKit 私有数据库；相关操作以您的设备控制为主要路径。

### 12. 本政策的更新

如本 App 的数据处理方式发生实质变化（例如新增服务器、账号、分析、广告、第三方 SDK 或新的数据用途），我们会在变更生效前更新本政策及 App Store 隐私信息，并在适用法律要求时取得必要同意。更新后的生效日期会显示在本页面顶部。

---

## English Version

This policy describes current services and App 1.2 data practices. Availability depends on your installed version and rollout status. Describing a feature does not mean it is available to everyone. Optional features process relevant content only when you use or enable them.

### 1. Who We Are

Civa (the “App”) is provided by Yangwei Xu (“we,” “us,” or “our”). We respect your privacy. This Privacy Policy explains how the App handles information relating to you.

**Developer Information**

- Product: Civa
- Developer and Personal Information Processor: Yangwei Xu
- Contact: support@civakitchen.site

### 2. Our Core Approach

Civa is a local-first recipe, meal-planning, and kitchen-record App, with no separate Civa account registration or sign-in and no advertising, analytics, or tracking SDK. We do not sell personal information or use it for targeted advertising or cross-app/cross-website tracking. User-initiated online sharing and feedback use developer-operated servers; they do not automatically upload the whole local kitchen.

Except for optional Apple speech recognition described in Section 5, iCloud sync described in Section 6.1, feedback described in Section 6.2, shared kitchens described in Section 6.7, and when you affirmatively use online or system sharing, backup export/import, or external links, the content you create and save in the App remains on your device and is not received by us.

### 3. Information Processed Locally on Your Device

To provide recipe, menu, fridge, and profile features, the App stores the following information locally on your device:

- a display name you choose to provide;
- profile, dish, and recipe-instruction photos you choose to add;
- dish names, ingredients, instructions, notes, custom tags, recipe links, dish statuses, and creation/modification times;
- meal plans, meal history, fridge items, shelf-life information, and related dates;
- ingredient quantities and units, recipe amounts, confirmed cooking consumption, inventory estimates and adjustments, and kitchen inventory-estimation settings;
- shopping lists, ingredient-use history, food journals and dining-out records, including place text you enter yourself, not system location;
- unfinished dish-editing drafts until successful save or explicit discard, without actively uploading them to Civa servers or the App's CloudKit sync; system device backups follow separate system rules;
- your personal kitchen, food journal and dining-out photos, and inventory receipt records;
- preferences such as language, background music, appearance, and current kitchen; and
- locally generated random identifiers needed to associate local records.

This information is used to display, edit, organize, back up, and restore your content on your device. Apart from online features you choose to use, we do not upload it to servers operated by us, analyze your behavior, or serve advertising.

### 4. Permissions and Optional Features

The App requests the following system permissions only when you choose to use the corresponding feature. You may decline a permission or revoke it at any time in iOS Settings. Doing so may disable that feature, but does not affect features that do not require the permission.

| Permission or capability | Purpose | How information is handled |
| --- | --- | --- |
| Camera | Take a dish photo or profile photo | The image is saved locally on your device after you confirm it. |
| Photo picker / Photos-library add access | Select an image; save a generated recipe image | Selecting or saving does not itself upload images to Civa. Optional online sharing or iCloud sync handles selected images as described in Sections 6.1 and 6.3; shared-kitchen images follow Section 6.7. |
| Microphone and Speech Recognition | Transcribe words you choose to dictate into recipe, instruction, or note text | Audio is used only while transcription is active; Civa does not retain raw audio. Confirmed text is stored locally. See Section 5. |
| File picker | Export or import a `.civa` / JSON backup | An export is saved to a location you choose; an import is read only after you select a file. Importing or exporting does not itself send the backup file to us. |

### 5. Apple Speech Recognition

When you actively enable voice input, the App accesses the microphone after system authorization and uses Apple’s Speech framework to transcribe your speech. Apple’s developer documentation states that speech recognition using `SFSpeechRecognizer` may involve sending voice data to Apple’s servers for processing. Although some devices or languages may support on-device recognition, we do not promise that every transcription is processed on device.

Use voice input only if you agree to Apple’s processing of the voice data under Apple’s applicable terms and privacy policy. Civa does not receive or retain your raw audio recordings. Apple is an independent service provider, and its processing is governed by its own privacy policy: <https://www.apple.com/legal/privacy/>.

### 6. Sharing, Backups, and External Links You Choose

- **Problem diagnostics (where available):** You may generate a local report containing app and system versions, data counts, kitchen identifier digests, recent startup/save/restore-purchase results and error codes. It excludes dish names, photos, recipe text, profile content, links and share credentials. Reports read at most 200 events from the last seven days; older events are pruned on the next write. Each export prunes older generated reports to leave at most three, removing exports older than seven days. Disk cleanup is not immediate while the app is inactive. Reports are not uploaded automatically; only your explicit system-share action sends a file to your chosen recipient. Shared copies are managed by you and that recipient.
- **System sharing:** You may generate a menu image and send it through the iOS share sheet to an App, contact, or service you choose. You select the recipient before sharing; that recipient’s handling is governed by its own policies and is outside our control.
- **Backup export:** You may export current kitchen data as a `.civa` or JSON file. A backup may include the information in Section 3, including photos and recipe records. Please choose storage locations and recipients carefully. Exporting does not itself send files to us. If you separately email a file to us, we receive it to handle your request; email retention and deletion follow Section 6.2.
- **Backup import:** A backup file you select is used only to restore or replace the applicable local kitchen data on your device. Do not import files from untrusted sources.
- **External recipe links:** When you request link recognition or import, the App may directly request the source page and required resources. Opening links uses the browser or relevant App. Source websites receive necessary network information, including IP and requested address, under their own policies, not your entire kitchen. The clipboard is read only when you actively paste.

### 6.1 Optional iCloud Sync Across Your Devices

iCloud sync is off by default. When you enable it, personal-kitchen recipes, dish and instruction photos, plans, fridge categories and tags, shopping items, ingredient quantities and units, recipe amounts, consumption and estimation records and related kitchen settings, meal history, dining-out photos, recipe cards, and profile data are stored in your private Apple CloudKit database and merged across devices using the same Apple Account. We do not operate a server that stores this sync content or use it for advertising or analytics. Language, music, and appearance preferences remain local. Personal sync in this section is limited to the same Apple Account. Shared kitchens across accounts are described separately in Section 6.7.

The App stores CloudKit's container-specific account identifier to prevent accidental uploads after an account change; it does not read your Apple Account password or email address. Signing out or switching accounts pauses sync and preserves local content without automatically uploading it to the new account. Turning sync off keeps existing local and cloud content. Offline changes remain local and are retried when connectivity and iCloud capacity permit. Sync is not a versioned backup: successfully synced deletions propagate to other devices. Uninstalling the App does not automatically delete its iCloud content.

To handle differing edits, the App retains pre-merge .civa copies locally, which you can export from sync settings. Copies inside the App sandbox are removed on uninstall; exported copies are managed at the location you chose. Apple's storage and services are subject to its terms and privacy policy.

A separate confirmed “Clear iCloud Copy” action clears Civa's cloud kitchen copy in the current account and pauses sync while preserving local content. Other devices pause when they receive the persistent clearing marker and require renewed confirmation before uploading old content. Older clients may require an update. Resuming with confirmation may recreate previously cleared content. This does not delete other devices' local data, exports, or Apple's own backups, nor guarantee third-party physical-erasure timing. An interrupted clear remains paused and requires retry, rather than reporting unconfirmed success.

Recovery copies are retained per merge round, with individual export and explicit deletion, not silent expiry. Sync restores only successfully uploaded content; downloads and propagation require connectivity and system scheduling. We do not promise instant sync, loss-proof storage, or recovery of all pre-uninstall content. Photo cropping and subject extraction occur on device, without identity recognition. Personal sync and full .civa backups may include source photos and editing content.

### 6.2 Feedback You Submit

Only when you select Submit Feedback, the category, entered message, optional contact email, Civa version/build and random submission identifier are sent over HTTPS to our Tencent Cloud server and then over encrypted SMTP to our Tencent enterprise mailbox, support@civakitchen.site, to handle and respond to feedback. An email address is not required. No recipe library, photos, device identifier, runtime logs or iCloud content are automatically attached. Do not enter passwords or other sensitive information.

For abuse prevention and deduplication, the server processes the source IP and stores an HMAC rate-limit digest, submission digest, receipt, status, time and counts, not message bodies, email addresses or raw IP addresses in the feedback control file. IP windows expire after one hour; submission records expire after 24 hours, with a one-minute running cleanup interval. Downtime or disk errors may delay deletion. Messages remain in the developer's inbox and are not deleted by uninstalling the App; contact the address above to request handling of a submitted message. Feedback and reply emails are retained to handle issues and necessary follow-up. The mailbox does not currently have a uniform automatic expiry mechanism. The developer handles deletion requests manually after verification; uninstalling the app does not trigger email deletion. We do not use these emails for marketing.

Tencent Cloud and Tencent enterprise mail handle transport and email processing. The Xiaohongshu hint is static text and sends no information to that platform. If you independently contact us there, its platform rules apply.

### 6.3 Online Recipe Shares and Dish Invitations

Only when you create an online share, selected recipe names, ingredients, instructions, notes, links and display-sized compressed or transparent photos are uploaded to Civa's Tencent Cloud server. Invitations include only candidate-display content, not the whole kitchen. Public sharing does not upload full private photo-editing source images. Local image generation and backup export do not themselves upload content to this server.

New dish invitations last three days and recipe shares last seven days from creation. Existing links retain the expiry set when they were created. Anyone holding a valid visitor link may view and forward it; access is not restricted to designated friends. A share is a snapshot: local edits, deletion or uninstalling do not alter or revoke it. Visitors may submit an optional nickname and dish choices with submission time. Only the creator can read results; visitors receive their own submission confirmation, not other visitors' results. We do not build cross-invitation visitor profiles.

Creators can revoke active shares with credentials held on this device through Share Center → Manage Shares. Independent credentials use device-only Keychain storage, are not part of visitor links or .civa/iCloud migration, and are not guaranteed to remain usable after uninstalling or changing devices. Legacy invitations without separate credentials no longer allow result lookup and must be recreated. Complaints or deletion requests for old links may be sent to support@civakitchen.site for necessary verification; a visitor link alone is not proof of ownership.

Expiry or revocation immediately stops server access to content, results and pictures without other active references. Stopping access does not mean immediate physical erasure. Running cleanup tasks reclaim online copies; image cleanup includes an upload-protection window and periodic sweeps. Downtime or faults may delay cleanup. Deduplicated images remain while referenced by another active share and may use an unpublished-upload grace period. Copies already saved by recipients cannot be remotely recalled.

### 6.4 App Store Update Checks (Added in 1.1)

When you enter the kitchen or return to the foreground, the app checks Apple's public App Store lookup service at most once a day for a published version. Requests contain Civa's public App ID and the App Store country code, without recipes, photos, backups, feedback, iCloud content or user identifiers. Apple receives necessary connection information such as the IP address under its privacy policy. The last check time, reminded version and reminder time are stored only on your device. You can postpone updating, and failed checks do not affect local use. These requests do not pass through Civa's servers.

### 6.5 Apple Purchases and Decoration Entitlements

Shop decorations use Apple App Store in-app purchases, with the price shown on the purchase confirmation screen. The app uses StoreKit to verify purchases on the device, refresh entitlements, respond to refunds or revocations, and restore purchases with the same App Store account. We do not read payment card details or Apple Account passwords, or send transaction credentials or purchase history to Civa's servers. Apple handles payments and its transaction records under its own policies. Decoration favorites and selections remain local. A .civa kitchen backup does not include purchase entitlements, and importing one does not grant ownership.

### 6.6 Providers, Regions and Policy Website

- Tencent Cloud: our sharing/feedback server is in the Shanghai region, under the [Tencent Cloud privacy statement](https://cloud.tencent.com/document/product/301/11470). This is not a claim about all third-party transport nodes.
- Tencent enterprise mail: handles feedback and replies under its [privacy guide](https://exmail.qq.com/cgi-bin/readtemplate?t=bizmail_privacy). Services accessed through WeCom also follow the WeCom rules linked in that guide. Provider storage and backup handling follow its terms.
- Apple iCloud/CloudKit and Speech: subject to [Apple's privacy policy](https://www.apple.com/legal/privacy/). Relevant mainland-China iCloud services follow the [Apple/GCBD arrangements](https://support.apple.com/zh-cn/121767). We do not claim all iCloud data stays in China or is end-to-end encrypted by Civa.
- Cloudflare Pages: hosts the policy website and processes necessary network metadata under [Cloudflare's privacy policy](https://www.cloudflare.com/privacypolicy/), separately from App kitchen uploads. This website uses fonts already installed on your device and does not load Google Fonts. Its language preference stays in your browser. We do not add advertising or behavioral analytics scripts.

### 6.7 Shared Kitchens You Create or Join (New in 1.2)

Shared kitchens use Apple iCloud/CloudKit so authorized members can manage a kitchen together. Creating or joining requires an available iCloud account. Your entire personal kitchen is not automatically shared when you create or join. Content you choose to copy or add to a shared kitchen becomes part of that kitchen.

Shared content includes recipes and photos, instructions, categories and tags, dish wishes, meal plans, fridge and shopping records, ingredient quantities and recipe amounts, consumption and inventory-estimation records, and food-journal or dining-out records you create in that kitchen. To display members and support collaboration, the App also processes nicknames, avatars, necessary CloudKit account and member identifiers, permissions, and creation and modification attribution. Members can view synced content within their permissions and edit where authorized; changes and deletions affect other members of the shared kitchen.

Invitations use Apple's sharing capabilities. Only authorized invitees can join; public-link editing is not enabled. Choose invitees and recipients of invitation links carefully. Information displayed in the system invitation interface is governed by Apple's service rules. Civa does not ask you to provide your Apple Account password to the developer or display your Apple Account email as your member nickname.

Apple's cloud services process shared data, and authorized devices retain local data needed to use the kitchen. The developer does not store the entire shared kitchen on Civa's sharing or feedback servers. Shared kitchens are separate from the public recipe links in Section 6.3. If you separately create a public share, Section 6.3 applies to the selected content.

Personal iCloud sync and shared kitchens are managed separately. Turning off personal sync does not leave a shared kitchen. Available kitchen-management controls let members leave and creators manage members or dissolve a kitchen. These operations depend on cloud confirmation; offline devices may learn about permission or content changes later. Leaving or removal does not delete kitchen content still available to other members or recall their saved copies, screenshots, or exports. Uninstalling does not automatically leave or delete the cloud kitchen. Apple's storage, backup and deletion rules apply; immediate physical erasure is not promised.

### 6.8 Home Screen Widgets (New in 1.2)

To show today's meals, dish wishes, inventory and shortcuts, the main App and widgets share necessary snapshots, kitchen references and thumbnails through an on-device App Group. This on-device sharing does not itself upload data to developer-operated servers. Network sync for the relevant kitchen remains subject to Section 6.1 or 6.7.

After adding a widget, some selected-kitchen content may appear directly on your Home Screen. Consider who can see your device when adding or removing widgets. System scheduling may delay refreshes, so widgets may temporarily show older content after a deletion, kitchen switch or permission change. You can remove widgets using system controls; removal does not delete kitchen content.

### 6.9 Themed Recipes and Author Links (New in 1.2)

Browsing or claiming themed recipes requests recipe catalogs and necessary images from Civa's content server and caches downloaded content on your device. Servers and network providers process information necessary to deliver downloads, such as source IP, requested address, time and response status. Logs follow Section 8 and are not used for advertising or cross-app tracking. Requesting these resources does not require uploading your personal recipe library.

Recipes you choose to claim are saved to a kitchen supported by the feature and subsequently follow that kitchen's sync settings. Opening an author's profile or recipe-source link uses a browser or the relevant third-party app; that provider may receive necessary network information under its own privacy rules.

### 7. Sharing, Sale, and International Transfers

We do not sell, rent, or trade your personal information; share your local content with advertisers, data brokers, or analytics providers; or track you across Apps or websites.

Other than your choices described in Section 6 and its subsections, or your use of Apple Speech Recognition described in Section 5, Civa does not transmit your content to third parties. Any transmission and potential international processing associated with Apple Speech Recognition and iCloud is handled by Apple under its own terms and privacy policy.

### 8. Retention and Deletion

Data in the App remains on your device until you:

- delete the relevant dish, photo, record, kitchen, or other content in the App;
- use the App’s import-and-replace feature for the relevant local kitchen; or
- delete the App, which will generally delete local data in the App sandbox.

Exported backups, photos saved to your library and copies saved by recipients are not automatically deleted when you delete app data or uninstall. Manage them at their respective locations. Feedback follows Section 6.2 and online sharing follows Section 6.3. Developer-controlled deployment archives and business backups are used for recovery and do not currently have a uniform automatic expiry mechanism. Deletion requests require checking controlled backups as well, to avoid republishing deleted content during recovery.

Servers process necessary operational and security records, such as source IP, request time, requested address, status and error information, to maintain the service and prevent abuse, not for advertising or profiling. Web-service logs rotate according to the running configuration; we do not claim a uniform seven-day or six-month cleanup mechanism is in place. Minimal records needed by law or for disputes have restricted use and access. Providers handle their own records and backups under their rules. You may ask about retention or request deletion through Section 11.

Shared-kitchen access and cloud content follow Section 6.7; local widget snapshots follow Section 6.8. Deleting synced shared records may affect other members; review the confirmation shown in the App.

### 9. Security

We rely on iOS App sandboxing, local storage, and system permission controls to limit access to App data. No electronic storage method is completely secure. Please protect your device, device-unlock method, and exported backup files.

### 10. Children

The App is not directed to children, and we do not knowingly collect children’s personal information. We do not request birth dates and cannot determine age from feedback alone. Children should use photo, voice, sharing, feedback, and backup features with the consent and guidance of a parent or guardian.

### 11. Your Choices and Rights

You can view, edit, export, or delete local content in the App, and manage Camera, Microphone, and Speech Recognition permissions in iOS Settings. For questions about this Policy, permissions, or local data handling, contact us at support@civakitchen.site.

The same address accepts access, copy, correction, deletion and optional-processing withdrawal requests. Our service target is an initial reply within three business days and completion or a progress explanation within 15 business days after necessary verification, not a statement of a universal statutory deadline. We use minimal proof such as a receipt, original contact email or management credential, not Apple passwords, device-unlock codes or routine identity-document photos. An email alone does not let the developer read or erase someone else's private CloudKit database; device controls are the primary route.

### 12. Changes to This Policy

If our data practices materially change—for example, if we add a server, accounts, analytics, advertising, a third-party SDK, or a new use of data—we will update this Policy and the App Store privacy information before the change takes effect and obtain consent where required by applicable law. The effective date above will be updated accordingly.
