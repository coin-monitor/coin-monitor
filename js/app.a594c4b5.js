(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,a){e.exports=a("2f39")},"0047":function(e,t,a){},"123f":function(e,t){},"2f39":function(e,t,a){"use strict";a.r(t);var o={};a.r(o),a.d(o,"getDarkModeIsActive",(function(){return M}));var n={};a.r(n),a.d(n,"getIsAuthenticated",(function(){return R})),a.d(n,"getMemberInfo",(function(){return z}));var i={};a.r(i),a.d(i,"setIsAuthenticated",(function(){return X})),a.d(i,"setMemberInfo",(function(){return W}));var c={};a.r(c),a.d(c,"login",(function(){return $})),a.d(c,"logout",(function(){return H}));var s={};a.r(s),a.d(s,"setFancyDetail",(function(){return te})),a.d(s,"setFancyRecommends",(function(){return ae})),a.d(s,"setFancyPopular",(function(){return oe}));var r=a("967e"),p=a.n(r),m=(a("a481"),a("96cf"),a("fa84")),l=a.n(m),d=(a("5c7d"),a("e54f"),a("44391"),a("4605"),a("f580"),a("5b2b"),a("8753"),a("2967"),a("7e67"),a("d770"),a("dd82"),a("922c"),a("d7fb"),a("a533"),a("c32e"),a("a151"),a("8bc7"),a("e80f"),a("5fec"),a("e42f"),a("57fc"),a("d67f"),a("880e"),a("1c10"),a("9482"),a("e797"),a("4848"),a("53d0"),a("63b1"),a("e9fd"),a("195c"),a("64e9"),a("33c5"),a("4f62"),a("0dbc"),a("7c38"),a("0756"),a("4953"),a("81db"),a("2e52"),a("22485"),a("7797"),a("12a1"),a("ce96"),a("70ca"),a("2318"),a("24bd"),a("8f27"),a("3064"),a("c9a2"),a("8767"),a("4a8e"),a("b828"),a("3c1c"),a("21cb"),a("c00e"),a("e4a8"),a("e4d3"),a("f4d9"),a("fffd"),a("f645"),a("639e"),a("34ee"),a("b794"),a("af24"),a("7c9c"),a("7bb2"),a("64f7"),a("c382"),a("053c"),a("c48f"),a("f5d1"),a("3cec"),a("c00ee"),a("d450"),a("ca07"),a("14e3"),a("9393"),a("9227"),a("1dba"),a("674a"),a("de26"),a("6721"),a("9cb5"),a("ed9b"),a("fc83"),a("98e5"),a("605a"),a("ba60"),a("df07"),a("7903"),a("e046"),a("58af"),a("7713"),a("0571"),a("3e27"),a("6837"),a("3fc9"),a("0693"),a("bf41"),a("985d"),a("0047"),a("2b0e")),f=a("42d2"),u=a("b05d"),h=a("0d59"),g=a("84e8"),b=a("9c64"),w=a("2a19"),y=a("1b3f"),T=a("436b"),C=a("18d6"),_=a("f508");d["a"].use(u["a"],{config:{loadingBar:{}},iconSet:f["a"],components:{QSpinner:h["a"],QSpinnerInfinity:g["a"]},plugins:{Meta:b["a"],Notify:w["a"],LoadingBar:y["a"],Dialog:T["a"],LocalStorage:C["a"],Loading:_["a"]}});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},v=[],I={name:"App",preFetch:function(e){e.store,e.currentRoute,e.previousRoute,e.redirect,e.ssrContext},created:function(){},mounted:function(){}},A=I,N=a("2877"),O=Object(N["a"])(A,k,v,!1,null,null,null),q=O.exports,P=a("2f62"),E={darkModeIsActive:!1,tokenName:"3101_token",reminderList:[{mark:"boom_increase",name:"实时 “涨幅” 提醒",caption:"10分钟内涨幅超过 1.2% 的数字货币"}],symbols:{BTC:{name:"比特币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png",desc:"比特币（BitCoin）的概念最初由中本聪在2008年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币。点对点的传输意味着一个去中心化的支付系统。\n与大多数货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个p2p网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。\np2p的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。该货币系统曾在4年内只有不超过1050万个，之后的总数量将被永久限制在2100万个。",site:"https://bitcoin.org/en/",paper:"http://www.bitcoin.org/bitcoin.pdf",release:"2008-10-31",tag:"区块链基础设施"},ETH:{name:"以太坊",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png",desc:"以太坊是一个以区块链为基础的，开源的公开的分布式计算平台，运行拥有智能合约（脚本）的系统。它通过以状态转换为基础的程序执行单元来支持一个改良过的中本聪共识版本。\n以太币是加密货币，它的区块链是由以太坊生成。以太币用来奖励那些贡献算力的矿工。以太坊提供了一个去中心化的图灵完备的虚拟机器，以太虚拟机（EVM）可以利用一个国际网络执行脚本。Gas是一个内部的交易定价机制，可以减少垃圾邮件以及在网络上实现资源配置。",site:"https://www.ethereum.org/",paper:"https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-White-Paper",release:"2014-07-24",tag:"区块链基础设施"},XRP:{name:"瑞波币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/4766a9cc-8545-4c2b-bfa4-cad2be91c135.png",desc:"瑞波币是由OpenCoin公司发行的虚拟货币，称作Ripple Credits，又称作XRP，中文名为瑞波币。\nRipple是世界上第一个开放的支付网络，通过这个支付网络可以转账任意一种货币，简便易行快捷，交易确认在几秒以内完成，交易费用几乎是零，没有所谓的跨行异地以及跨国支付费用。\nRipple开放式支付系统是一个虚拟货币网络（分布式的P2P清算网络）、未来的电子支付平台。2004年，RyanFugger就推出了Ripple的第一个实现版本，它的目标是构建一个去中心化的、准许任何人创建自家货币的虚拟货币系统。目前Ripple由OpenCoin公司（目前改名为RippleLabs）开发、运行、维护。",site:"https://ripple.com/",paper:"https://ripple.com/files/ripple_consensus_whitepaper.pdf",release:"2011-04-18",tag:"区块链基础设施"},BCH:{name:"比特币现金",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/db45566d-6c97-4944-937e-1b6333be3a7f.png",desc:"比特现金（BCH）全称为BitcoinCash，是矿池ViaBTC基于BitcoinABC方案推出的新的加密数字资产，与比特币相同，都是是一种基于去中心化，采用点对点网络，以区块链作为底层技术的加密货币。比特币社区围绕扩容问题争论了三年之久，终于在2017年8月1日，比特币现金在区块高度478558执行硬分叉，按照比特币1：1分发，总量2100万，删除隔离见证、区块上限升级为8M，后升级为32M，通过链上扩容解决了旧版比特币系统中手续费高、确认慢、实用性差等问题，履行比特币作为「点对点电子现金」的承诺。",site:"https://www.bitcoincash.org/",paper:"https://www.bitcoincash.org/bitcoin.pdf",release:"2017-07-24",tag:"区块链基础设施"},LTC:{name:"莱特币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/359ca651-a084-4010-92d8-4eaff96e6384.png",desc:"莱特币(Litecoin)是一种基于“点对点”(peer-to-peer)技术的网络货币，其受到了比特币(BTC)的启发，并且在技术上具有相同的实现原理。它不同于比特币的地方在于，通过消费级的硬件也可以高效地“挖矿”，提供更快速的交易确认(平均2.5分钟)。莱特币网络预期将生产8400万个货币单位。",site:"https://litecoin.com/",paper:"https://litecoin.info/index.php/Litecoin",release:"2011-11-09",tag:"区块链基础设施"},DOGE:{name:"狗狗币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/22ef2baf-b210-4882-afd9-1317bb7a3603.png",desc:"Dogecoin 诞生于2013年12月8日，基于Scrypt算法，是国际上用户数仅次于比特币的第二大虚拟货币 。狗币系统上线后，由于reddit的助力(这网站上面的Doge内容泛滥得可怕)，流量呈现爆发式发展，不过两周的时间，狗狗币已经铺开了专门的博客、论坛，截止2015年6月9日，市值达到1亿。",site:"https://dogecoin.com/",paper:"https://github.com/dogecoin/dogecoin",release:"2013-12-12",tag:"区块链基础设施"},EOS:{name:"柚子",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/09f93059-fe85-42cc-96b7-603ef6da07c6.png",desc:"EOS.IO软件引入了一个区块链结构，这个结构保证了去中心化应用的垂直和水平伸缩。通过一个模拟操作系统的构想来实现这个目标，基于这个构想，可以创建新的应用。这个软件可以在多个CPU核心和集群中交叉，提供账户、证明、数据库、非同步交流以及实现应用的调度。最终的技术是一个区块链体系结构，这个结构有能力实现每秒上百万的交易量，不需要用户付费并且可以快速简易地部署去中心化应用。",site:"https://eos.io/",paper:"https://github.com/EOSIO/Documentation/blob/master/zh-CN/TechnicalWhitePaper.md",release:"2017-07-02",tag:"区块链基础设施"},ADA:{name:"艾达币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/3bc4f3c3-c142-4379-9ebd-a72f332776bc.png",desc:"艾达币（Cardano）是一个去中心化的公共区块链和加密货币项目，并且是完全开源的。 卡尔达诺正在开发一个智能合约平台，该平台旨在提供比以前开发的任何协议都要先进的功能。 它是第一个从科学哲学和研究为先的方法演变而来的区块链平台。 开发团队由全球范围内的大型专家工程师和研究人员组成。",site:"https://www.cardano.org/",paper:"https://www.cardanohub.org/zh/academic-papers-3/",release:"2017-01-01",tag:"区块链基础设施"},XMR:{name:"门罗币",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/8d01ef47-63e6-47ac-8f6c-411ccb4e7a18.png",desc:"XMR是一种使用CryptoNote协议的虚拟币币种，其并不是比特币的一个分支。CryptoNote 在2012年已经开发出来，当年已有Bytecoin使用CrytoNote技术，XMR是在2014年开发出来，可以预见CryptoNote技术已经非常成熟，该技术通过数字环签名提供更好的匿名性。目前国内对该币种匿名技术宣传较少，国外知名度较高。Monero词语是引自于世界语，在世界语中的含义表示为货币。",site:"http://www.monero.cc/",paper:"",release:"2014-04-18",tag:"区块链基础设施"},XTZ:{name:"XTZ",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/e3a871e5-049f-47e5-bd60-9852b163f0ee.png",desc:"Tezos（XTZ）是一个多功能平台，支持去中心化应用程序（DApps）和智能合约。 它是由前摩根士丹利分析师阿瑟·布雷特曼（Arthur Breitman）在他的妻子凯瑟琳·布雷特曼（Kathleen Breitman）的支持下开发的，并于2017年进行了首次代币发行（ICO），筹集了2.32亿美元。 ICO一年后，Tezos于2018年7月启动了beta网络。 Tezos平台旨在将自校正协议和链上治理相结合来管理网络修正，并支持图灵完整的智能合约。 Tezos基金会还支持Tezos，Tezos基金会是瑞士的一家实体，通过赠款和其他资本工具促进Tezos协议。",site:"https://tezos.com/",paper:"https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf",release:"2017-10-03",tag:"区块链基础设施"},XLM:{name:"恒星币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/ed48f689-8b24-4aa9-bc38-6501f6b0f225.png",desc:"恒星是货币与支付的开源网络。恒星使得创造创造、发送和交易电子形式的货币——美元、比索、比特币及其他货币变得可能。它使得全世界的金融系统可以做单个网络上合作。 恒星没有私人所有者，它的所有权属于公众。它的软件运行在一个去中心化的开放网络上，每天处理了百万级别的交易。与比特币和以太坊类似，恒星依靠区块链使得网络保持同步，但是终端用户的体验更像使用现金——恒星比那些典型的基于区块链系统项目更加迅速、便宜和高效。",site:"https://www.stellar.org/",paper:"https://www.stellar.org/papers/stellar-consensus-protocol",release:"2014-18-01",tag:"去中心化金融"},LINK:{name:"LINK",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/1eda1f7f-585a-4f16-abd7-a7104221414a.png",desc:"Chainlink于2017年6月由旧金山金融科技公司SmartContract推出，开发商将其描述为一种安全区块链中间件，旨在通过允许智能合约访问关键链外资源（例如数据流（数据库）、网站（微信， 淘宝等）API、 和传统的银行（支付宝、微信支付等）账户支付。 ChainLink网络是ChainLink节点的分布式网络，它们都直接将特定数据、API和各种离线支付功能的使用输送给智能合约。 Chainlink网络由两个独立的部分组成，链上链和外链，它们必须交互以提供服务。该网络的构建方式使其可以升级，因此可以在更好的技术和技术出现时替换其不同的组件。网络的链上组件通过服务级别协议（SLA）基于智能合约的一方请求的度量来过滤神谕。使用这些指标，Chainlink收集对SLA查询的响应，使用声誉和聚合模型对它们进行排序，并提供可能实施到智能合约中的Chainlink查询的最终集合结果。 Chainlink的代币LINK销售上限为3200万美元，总供应量为10亿。所有LINK代币中有35％会通过节点运营商来激励生态系统，并在公开代币销售中额外销售35％。LINK代币总数中的最后30％将留在公司继续开发和员工支付。",site:"https://smartcontract.com/",paper:"https://link.smartcontract.com/whitepaper",release:"2017-09-21",tag:"区块链基础设施"},TRX:{name:"波场币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/dd9332e2-0a23-4228-89b2-50d188a09e2b.png",desc:"波场TRON以推动互联网去中心化为己任，致力于为去中心化互联网搭建基础设施。旗下的TRON协议是全球最大的基于区块链的去中心化应用操作系统协 议之一，为协议上的去中心化应用运行提供高吞吐，高扩展，高可靠性的底层公链支持。波场TRON还通过创新的可插拔智能合约平台为以太坊智能合约提供更好的兼容性。\n自2018年7月24日起，TRON收购了位于旧金山的互联网技术公司BitTorrent Inc.。 BitTorrent Inc.设计的分布式技术能够有效扩展，保持智能化，并使创作者和消费者能够控制其内容和数据。 每个月有超过1.7亿人使用BitTorrent Inc.开发的产品。 BitTorrent Inc.的协议每天可以传输全球40％的互联网流量。",site:"https://tron.network/",paper:"https://tron.network/resources?lng=zh&amp;amp;amp;amp;amp;amp;amp;amp;amp;name=1",release:"2017-07-01",tag:"区块链基础设施"},NEO:{name:"NEO",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/88cf746f-31d3-469f-a499-31f7cf20b2cd.png",desc:"Neo 是利用区块链技术和数字身份进行资产数字化，利用智能合约对数字资产进行自动化管理，实现 “智能经济” 的一种分布式网络。",site:"https://neo.org/",paper:"https://docs.neo.org/docs/zh-cn/basic/whitepaper.html",release:"2014-06-01",tag:"区块链基础设施"},ETC:{name:"以太经典",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/00454e4d-b30f-4fef-bf8b-5b5fbc4b8f1e.png",desc:"以太坊经典是一个运行智能合约的去中心化平台：可以完全按照编程方式运行的应用程序，而不会造成停机，审查或第三方干扰的任何可能性。以太坊经典由加密货币（ETC），区块链分类帐以及在其之上运行的应用程序和服务生态系统组成。简而言之，以太坊经典提供了一种无需中介机构（例如银行和其他金融机构）即可管理数字资产的方法。ETC允许编写，部署和执行不可审查的智能合约；它实现了真正不可阻挡的可编程资金。以太坊经典是原始非分支以太坊（ETH）链的延续，并存在以保留``代码就是法律''的原则。",site:"https://ethereumclassic.github.io/",paper:"https://ethereumclassic.github.io/assets/etc-thesis.pdf",release:"2015-11-01",tag:"区块链基础设施"},DASH:{name:"达世币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/c050f81f-97d8-445c-9f3b-619bbb644cb0.png",desc:"达世币是一种可线上操作的数字货币，用户可以使用达世币进行安全的在线即时支付，商户则可以为店内添加由全球千万用户所建立的开源支付平台。 达世币核心由独特的激励制P2P网络构成。矿工们维护区块链安全得到奖励；而主节点持有者则是为用户验证交易、存储数据以及提供多种服务而获得奖励。主节点代表着新一层级的网络。它们可组成高度安全的集群 – 仲裁链, 提供多种类的去中心化服务，如即时交易、匿名性、去中心化管理等等，同时它还可以防止低成本的网络攻击。 得益于达世币的奖励机制，它的网络主节点自2014年发行以来已经增长到了4100个，这意味着达世币P2P网络已经成为全球最大的网络之一。更多的节点意味着更高的安全性能，达世币能为更多来自全球各地的终端用户提供全天候的数字货币服务。",site:"https://www.dash.org/",paper:"https://github.com/dashpay/dash/wiki/Whitepaper_zh_cn",release:"2014-01-18",tag:"区块链基础设施"},MKR:{name:"Maker",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/44c995cf-d2c4-40d0-a1dd-998a0d947059.png",desc:"MakerDAO 是以太坊上的智能合约系统，提供第一个去中心化稳定币 Dai (以太美元) 和衍生金融产品。\nDai 由链上资产足额抵押担保发行，和美元保持1:1锚定，1 Dai = 1 美元。个人和企业可以通过兑换 Dai 或者抵押借 Dai 获得避险资产和流动资金。\nMaker 在抵押贷款、保证金交易、国际转账、供应链金融等方面都已经有落地应用。",site:"https://makerdao.com/",paper:"https://makerdao.com/whitepaper/",release:"2016-04-09",tag:"去中心化金融"},ATOM:{name:"阿童木",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/b6b0ea3d-995f-4c16-b635-c76a21c0a726.png",desc:"Cosmos网络由许多独立的并行区块链（称为区域）组成，每个区块均由Tendermint之类的经典拜占庭容错（BFT）共识协议提供支持（已被ErisDB等平台使用）。某些区域相对于其他区域充当集线器，从而允许许多区域通过共享的集线器进行互操作。该架构是比特币侧链概念的一个更通用的应用，使用经典的BFT和权益证明算法，而不是工作量证明。 Cosmos可以与其他多种应用程序和加密货币进行互操作，而其他区块链则无法做到这一点。通过创建一个新区域，您可以将任何区块链系统插入Cosmos集线器，并在这些区域之间来回传递令牌，而无需中介。",site:"https://cosmos.network/",paper:"https://cosmos.network/resources/whitepaper",release:"2019-03-15",tag:"区块链基础设施"},ZEC:{name:"大零币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201110/4d538dc7-6543-4bd0-ab9a-cfc37363cab8.png",desc:"zcash 是首个使用零知识证明机制的区块链系统，它可提供完全的支付保密性，同时仍能够使用公有区块链来维护一个去中心化网络。与比特币相同的是，zcash代币（zec）的总量也是2100万，不同之处在于，zcash交易自动隐藏区块链上所有交易的发送者、接受者及数额。只用那些拥有查看秘钥的人才能看到交易的内容。用户拥有完全的控制权，他们可自行选择向其他人提供查看秘钥。 zcash 是 bitcoin 的分支，保留了 bitcoin 原有的模式，基于比特币 0.11.2 版代码修改的。 zcash 钱包资金分 2 种：透明资金、私有资金，透明资金类似比特币资金；私有资金加强了 隐私性，涉及到私有资金的交易是保密不可查的，透明资金与透明资金的交易是公开可查的。",site:"https://z.cash/",paper:"http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf",release:"2016-10-28",tag:"区块链金融"},XEM:{name:"新经币",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/a56dc2d1-00ce-42e4-9e82-550e839ab82d.png",desc:"XEM是世界上第一个智能资产的区块链。从底层协议到企业级的应用表现，XEM的区块链技术传递着一个世界级的数字资产管理平台，包括：货币、供应链、公证、所有权记录等等。XEM的功能通过一个直接和安全的开发界面展示出来，这样你就能够在记录的时间内展示你的区块链技术解决办法。无论你是否在创建下一个最棒的移动端应用或者将区块链技术带入到目前的商业结构中，XEM都能让区块链技术服务与您。 XEM的智能资产系统允许任何人完全自主地使用XEM区块链，XEM具有一系列强大的特点，包括类域名空间和完全的链上多重签名控制。任何一种应用都能够通过XEM简单的API接口实现这些特点，XEM的API能够简单地整合移动端APP、现有的商业结构或者合约逻辑。XEM公共区块链为开发者们提供了一个开放和自相似的平台。",site:"http://nem.io/",paper:"https://nem.io/wp-content/themes/nem/files/NEM_techRef.pdf",release:"2015-04-01",tag:"区块链基础设施"},ONT:{name:"本体",icon:"https://static-file-1259603563.file.myqcloud.com/images/20200708/e47d06e2-84f8-411d-b982-e2e5e18f37c2.png",desc:"本体与其分布式账本使用解耦式架构，其底层支持多种区块链以及传统IT系统。在账本层面，本体的分布式账本框架提供智能合约服务，并可以根据不同场景提供定制。在应用层面，为特定商业活动服务的多个模块和协议可以提高整个架构的可扩展性和灵活性。\n在第一阶段，本体将一系列核心协议用于身份认证、授权、数据交换。这些协议与国际标准和W3C兼容。其加密签名协议支持中国国家加密标准、RSA、ECC。其分布式数据交换系统与UMA兼容，因此该系统是开放、标准化的，并将欢迎合作、不断发展。\n作为一个信任生态的底层基础设施，本体支持分布式科技和数据系统的发展和维护。合作伙伴只需关注其自身业务，而无需分散时间和精力到技术层面。本体提供一系列应用框架，包括API、SDK等多种应用模块。来自各种技术背景的应用服务商皆可以在本体上开发其去中心化应用，使所有人都可以使用去中心化系统。",site:"https://ont.io/",paper:"https://ont.io/documents",release:"2018-02-26",tag:"区块链基础设施"},BAT:{name:"注意力币",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/b87dedcf-edaa-4069-bfad-de7f88d7204e.png",desc:"BAT代币通过创建可以在发布者，广告商和用户之间交换的新令牌，从根本上提高了数字广告的效率。 这一切都发生在以太坊区块链上。 该令牌可用于在BAT平台上获取各种广告和基于关注的服务。 令牌的用途是基于用户的注意，它只是表示一个人专注于精神投入。",site:"https://basicattentiontoken.org/",paper:"https://basicattentiontoken.org/wp-content/uploads/2017/07/BasicAttentionTokenWhitePaper_ZH.pdf",release:"2017-05-31",tag:"区块链基础设施"},DGB:{name:"极特币",icon:"https://static-file-1259603563.file.myqcloud.com/images/20200622/93051a23-b32f-45ca-bbc0-819651caaf11.png",desc:"DigiByte不仅仅是一种更快的数字货币。 它是一种创新的区块链，可用于数字资产，智能合约，去中心化应用程序和安全身份验证。",site:"https://digibyte.io/",paper:"https://digibyte.io/docs/infopaper.pdf",release:"2014-01-14",tag:"区块链基础设施"},OMG:{name:"嫩模币",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20201221/e1a326dd-7108-410a-a7a2-4c68e1c1c5ac.png",desc:"OmiseGO 正在搭建一个具备去中心化交易、流动性提供机制、清算信息网络和资产支持的区块链网关。OmiseGO 不属于任何一方。相反，它是一个开放的分布式验证节点网络，网络内的验证节点将约束所有参与者的行为。它使用协议代币机制来创建股权证明区块链，以便在参与者之间实现市场活动。这个高性能的分布式网络允许不同资产类别间的交易——无论是由法币支撑的发行方，还是完全去中心化的区块链代币（ERC-20 类别以及本地化的加密数字货币）。跟几乎所有其他去中心化交易平台不同，该分布式网络在无需可信任的网关代币的前提下，允许不同区块链间直接进行去中心化交易。此外，市场利差将显著下降，并通过去中心化监管以及市场活动透明度的提高来鼓励市场保障。上述过程通过使用智能合约以及协议代币保证委托交易账本配对的正确性。这是使用以太坊担保清算活动以及通过使用以太坊智能合约来保证历史交易数据的新结构。",site:"https://omisego.network/",paper:"https://cdn.omise.co/omg/whitepaper.pdf",release:"2017-06-27",tag:"去中心化金融"},KNC:{name:"KNC",icon:"https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20210520/06470f9a-8f72-40d8-a31f-52166c4c70d6.png",desc:"KyberNetwork，它是一个具备高流动性的数字资产（例如，各类加密代币）以及加密数字货币（例如以太币，比特币和ZCash）即时交易和兑换的链上协议。KyberNetwork将会是第一个实现交易所的理想操作属性的系统，比如无须信任特性、去中心化执行、即时交易和高流动性。除了行使交易所的功能，KyberNetwork还将提供各类支付API，以允许以太坊账户轻松地接收以各类加密代币形式呈现的付款。举个例子，任何商家现在都可以使用KyberNetwork的API来接收任意加密代币形式的用户付款，但商家会以以太币（ETH）或其他首选代币的方式来收到付款。 尽管我们是在以太坊网络上运行，但KyberNetwork的路线图包含了使用中继技术和类似于Polkadot和Cosmos这样的未来协议，以支持不同加密币种之间的跨链交易。通过使用这种无须信任的支付服务，以太坊账户将能够通过我们的支付API安全地收到比特币、ZCash或其他加密货币形式的付款。我们也将引入衍生工具来为用户降低KyberNetwork Crystal（KNC）及其所选择的其他加密货币的波动风险。通过这种形式，用户可以综合参与价格走势。",site:"https://kyber.network/",paper:"https://kyber.network/assets/KyberNetworkWhitepaper.pdf",release:"2017-09-25",tag:"去中心化金融"},THETA:{name:"Theta Network",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/75b4edca-7b00-489e-8433-0e1fc056c35a.png",desc:"Theta is an open source protocol purpose-built to power the decentralized streaming network and will allow for vertical decentralized apps (DApps) to be built on top of the platform to enable esports, music, TV/movies, education, enterprise conferencing, peer-to-peer streaming, and more. SLIVER.tv’s DApp will be the first application built on the Theta network leveraging its existing user base of millions of esports viewers.",site:"https://www.thetanetwork.io/",paper:"https://s3.us-east-2.amazonaws.com/assets.thetatoken.org/Theta-white-paper-latest.pdf?v=1544141896.351",release:"2018-01-12",tag:"区块链基础设施"},QTUM:{name:"量子链",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/aaf3b2ce-9598-4309-845c-15705bab2e8f.png",desc:"Qtum全球首个兼容比特币UTXO模型和以太坊虚拟机（EVM）的PoS智能合约平台，通过全新设计的账户抽象层（AAL）将比特币和以太坊生态连接，分层设计为量子链区块链带来了更多灵活性，同一条区块链兼容多种虚拟机或智能合约运行环境，现有应用可以在移动设备上实时交互，不断拓展更多的区块链商用特性,Qtum拓宽智能合约生态，首创的x86虚拟机将使下一代去中心化应用的设想成为现实 —— 开发者可以采用多种主流编程语言进行智能合约的开发。\n2017年Qtum量子链主干全球网络正式上线，节点高峰时期仅次于以太坊与比特币，全球节点超过24个国家。Qtum量子链还曾与中国互联网安全专家360及视频网络门户巨头暴风影音签署合作备忘录，分别在区块链网络中全节点的部署，区块链网络安全、区块链与视频行业融合，区块链开源社区建设等方面开展深入合作，携手推动中国区块链技术的商业落地和技术发展。Qtum现已在加州大学伯克利分校、爱沙尼亚塔林科技大学、哥伦比亚大学以及西安交大等中外名校建立区块链技术孵化器，深入研究与探索将智能设备与分布式账本技术相结合的真实应用场景。",site:"https://qtum.org/",paper:"https://qtum.org/en/white-papers",release:"2017-03-16",tag:"区块链基础设施"},ICX:{name:"ICX",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/6cc30281-0724-46c1-bfca-ff96ab60fccd.png",desc:"ICON是一个专注于互操作性的去中心化区块链网络。借助ICON的“区块链传输协议”，独立的区块链（如比特币和以太坊）可以相互连接和进行交易。这就打开了跨链用例，而没有像ICON这样的互操作性层是不可能的。 ICON Network将自己描述为基于本机加密货币ICX的通用区块链协议，该协议可以运行智能合约，采用BFT-DPoS（委托权益证明）共识协议并使用称为DPoC（委托）的经济监管协议贡献证明）。 ICON网络由专有的称为“环链”的区块链引擎提供动力，并具有每秒处理数百笔交易的能力。 ICON项目已启动，以确保机构和公司之间共享数据的完整性和透明性，并在没有集中化组织的情况下将异构资产转移到异构区块链上。从长远来看，ICON Network的目标是成为一个基于BTP技术连接多个区块链的“链间”。",site:"https://icon.foundation/",paper:"http://docs.icon.foundation/ICON-Whitepaper-EN-Draft.pdf",release:"2017-10-28",tag:"去中心化金融"},BTG:{name:"比特黄金",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/262ad6d4-eb36-4288-aaf0-c127bace866f.png",desc:"比特币黄金在区块491406（2017-10-24 01:17:35 utc）之后按计划分叉比特币区块链。BTG是对比特币区块链进行硬分叉得到的一种新的数字货币，具体时间为比特币区块高度491406（2017-10-24 01:17:35 utc），其主要特点为： 类似于bitcoin cash，BTG已经添加sighash_forked（一种硬分叉后的安全机制）。BTG将会采用equihash pow算法，这个算法和btc用的sha256的区别在于，哈希算力将受计算设备的内存大小影响。所以，asic矿机将不再有效用于BTG挖矿，这也是为了抵御asic导致的算力集中化，也算是给比特币未来能否修改挖矿算法做了一次实验路线猜想的实施。BTG目前存在的问题有：没有具名的代码开发者。同时，BTG代码库还包含8,000块(100,000 btg)的私有预挖区块。开发商可能会在公开市场上出售其预挖的BTG。",site:"https://bitcoingold.org/",paper:"",release:"2017-10-24",tag:"区块链基础设施"},WAVES:{name:"Waves",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/4a19ba9d-d60b-4ebd-a765-bdeeda0b7de1.png",desc:"The WAVES token trades on the largest global crypto exchanges and on Waves’ own secure DEX. Waves platform offers unprecedented throughput and flexibility. Features include the LPoS consensus algorithm, Waves-NG protocol and advanced smart contract functionality. Since 2017, Waves has collaborated with Microsoft Azure and been an official partner of Deloitte.",site:"https://wavesplatform.com/",paper:"https://wavesplatform.com/files/whitepaper_v0.pdf",release:"2016-04-12",tag:"区块链基础设施"},ZIL:{name:"Zilliqa",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/80289eb9-ed6f-47ef-867e-8de7c485bcbc.png",desc:"Zilliqa (https://www.zilliqa.com/) 作为一个新的公有区块链，着重为高吞吐量的应用程序提供运行平台。它将分片技术从理论变为实践，运用创新的密码技术和共识协议，提供随着网络增容而不断提高的交易处理能力。在最新的实验中，测试网络达到每秒处理2,800个交易以上。这比目前的主流区块链平台快了200多倍。此外，Zilliqa提供安全和高效的智能合约架构，以实现“设计即安全”的智能合约编程和验证。\nZilliqa区块链平台致力于支持高吞吐量和数据驱动的分布式应用程序，以满足诸如电子广告、支付、共享经济和产权管理等业务必要的扩容需求。\nZilliqa团队由技术创业者、学术界专家、资深工程师，以及风险投资家组成。Zilliqa的底层技术在被应用于目前的公有链平台之前，从研究实验室中诞生，并被开发成商业应用。Zilliqa的源代码公布在https://github.com/Zilliqa/Zilliqa。测试网浏览器在https://explorer.zilliqa.com。",site:"https://zilliqa.com/",paper:"https://docs.zilliqa.com/whitepaper.pdf",release:"2018-01-25",tag:"区块链基础设施"},IOST:{name:"IOST",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/ac3c4be1-e585-4923-bd1d-d8e19a8c4a6c.png",desc:"IOST是一个由红杉、真格等全球一线美元投资机构支持的，为在线服务提供商而开发的区块链应用平台。主网上线后IOST已正式成为除Ethereum、EOS、Tron外全球Top4的DApp公链平台。 IOST通过PoB共识机制和第二层扩展方案的设计来实现横向扩容和高吞吐量的目标；通过开发社区自有网络的有效方式为第三方开发人员、创作者和企业提供实现价值的平台。IOST比基于DPoS机制的EOS更去中心化，比ETH智能合约平台更具可扩展性。",site:"https://iost.io/",paper:"https://weibo.com/ttarticle/p/show?id=2309404238532263729566#_0",release:"2018-01-11",tag:"区块链基础设施"},LRC:{name:"路印",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/73d7ee31-05ca-4297-8c93-4c310350f335.png",desc:"Loopring是新一代去中心化交易撮合协议，不仅拥有一套公开的用于执行交易和撮合操作的智能合约，而且还有一组链下参与者用来撮合和广播订单。路印协议采用去中心化技术，提供零风险的代币交易所模式，并允许多家交易所通过竞争，对同样的订单进行链外撮合及链上清结算。",site:"http://loopring.org/",paper:"https://github.com/Loopring/whitepaper/raw/master/zh_whitepaper.pdf",release:"2017-08-01",tag:"区块链基础设施"},NULS:{name:"NULS",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/a21154a3-44df-484d-95aa-142d1a5dbc89.png",desc:"NULS是一个面向定制化服务的区块链基础设施，一个全球化的开源社区项目。NULS设计的技术架构由微内核和功能模块组成，提出了弱化主链的全新思维，通过将事件和服务剥离，进而实现高度模块化的底层架构。同时，NULS制定了一套工业化区块链技术标准，遵循热插拔、模块化、平行扩展原则，提供智能合约、多链并行、跨链共识等运行机制，降低开发和使用的成本，推动区块链商业应用进程。NULS提出模块化思维与多链并行基本架构，秉承以“链”为核心的发展理念，打造核心产品“链工厂”。基于NULS，用户可以灵活选择核心功能模块创建NULS链网中的区块链，也可以通过很少的编程工作通过智能合约来定义自己的业务逻辑。",site:"https://nuls.io/",paper:"https://nuls.io/api/v1/download/files/papers/white/NulsWhitepaper1.1.pdf",release:"2017-09-27",tag:"区块链基础设施 区块链金融"},NAS:{name:"星云链",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/b53d4514-db65-48e6-bcf2-c24498b92e6f.png",desc:"星云链是新一代区块链公链，引入了区块链价值发现体系——星云指数（Nebulas Rank，NR），对区块链世界中每一个地址、DApp及智能合约的价值进行量化。以星云指数为基础，\b设计了星云激励（Nebulas Incentive, NI)，包括开发者激励协议和激励用户的共识机制。更进一步，提出了星云原力（Nebulas Force，NF），以保证星云链及其上的智能合约能够自进化。星云指数、星云激励以及星云原力三者相互促进，构建出可持续升级的良性生态。",site:"https://www.nebulas.io/",paper:"https://www.nebulas.io/docs/NebulasTechnicalWhitepaperZh.pdf",release:"2017-06-28",tag:"区块链基础设施"},CTXC:{name:"CTXC",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/e07316d8-d579-4398-9a56-61834f167fb1.png",desc:"Cortex的目标是打造一个真正去中心化的人工智能自治系统，在区块链上提供最先进的机器学习模型。用户可以使用Cortex区块链上的AI智能合约来进行推断。Cortex的目标之一还包括实现一个机器学习平台，允许用户在平台上发布任务，提交AI DApps (人工智能去中心化应用)。 目前的智能合约都是在电脑的CPU上执行，这造就了现在区块的局限性。然而由于AI模型计算上的复杂性，CPU的算力并不能满足AI算法的要求。Cortex想通过提供一个支持AI模型的公链而在区块链上创造一些更复杂的内容。Cortex将加入对智能合约内置机器学习推断的支持。因此我们要从底层开始建立一条公链，在全节点上用GPU或者是FPGA来运行AI智能合约来达到最终的全网共识。",site:"https://www.cortexlabs.ai/",paper:"https://www.cortexlabs.ai/Cortex_AI_on_Blockchain_CN.pdf",release:"2018-04-17",tag:"区块链基础设施"},GTO:{name:"Gifto",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191211/3f86c61d-a386-4db4-bfc5-cd740b54ef7c.png",desc:"GIFTO是一个去中心化虚拟礼物赠送协议，可以激励全球使用者的内容创业并变现。对内容创作者来说，虚拟礼物赠送是一个极其有效的变现方式。2017年，Uplive，AIG的直播平台，通过虚拟礼物创造了超过1亿美元的收益。GIFTO计划将直播使用的礼物赠送模式带入全球内容平台，包括YouTube, Instagram和Snapchat。",site:"https://gifto.io/",paper:"https://gifto.io/GIFTO_Whitepaper_V2.0_20171204.pdf",release:"2017-12-19",tag:"应用类Token"},MDT:{name:"量数",icon:"https://static-file-1259603563.file.myqcloud.com/images/20200605/fb52441c-c1d0-4bde-a963-7d4d47e3e70e.png",desc:"MDT 量数是一个基于区块链技术的去中心化大数据交易生态。MDT 量数对用户数据的价值进行量化，激励用户分享数据并获得收益；另一方面，由于区块链的可溯源性，数据买家也可以保证数据本身的有效性和真实性。MDT 量数致力于为数据交易的各方提供更有效率、更公正、透明的交易方案。",site:"https://mdt.io/",paper:"https://mdt.io/cn/docs/whitepaper_CN.pdf",release:"2018-01-03",tag:"应用类Token"},TCT:{name:"TokenClub",icon:"https://static-file-1259603563.file.myqcloud.com/images/20200120/2500c416-b5c7-45a3-93a0-ea3d74d06352.png",desc:"TokenClub致力于打造一个以投资者为中心的、有温度的数字货币投资平台，为投资者提供及时准确的市场信息、一站式的投资实战指导、有趣的社区互动体验和值得信赖的金融服务，连接投资者与区块链项目，构建一个自治、信任、高效的数字资产投资服务生态。 经过一年的努力，TokenClub始终贯彻着以投资者为中心的理念，打造了集行情资讯、投顾投教、直播、社区、资管、研究院为一体的综合投资服务平台，获得了上百万用户的喜爱。随着区块链行业合规化的发展，TokenClub也在不断推进自身的合规性，现拥有SEC颁发的注册投资顾问牌照，开启了国际化与合规化的新篇章。",site:"https://tokenclub.com/",paper:"https://tokenclub.com/about/assets/TokenClub_c.pdf",release:"2018-01-03",tag:"区块链金融"},YOYO:{name:"YOYOW",icon:"https://static-file-1259603563.file.myqcloud.com/images/20191212/e7d0e15c-8d56-4ce5-889b-20ce7856750d.png",desc:"YOYOW 的名称来自英文 You Own Your Own Words，其目标是建立一个利用区块链技术，使用 去中心化的共识方式为内容生产领域进行贡献定价的区块链网络，使内容生产者、内容支持者、内 容筛选者和生态建设者都能得到合理的回报。 YOYOW 的设计初衷是构建一套合理的内容价值分配机制，同时构建一个基于用户内容评价的价值 网络。无论是文本、视频、图片、音频甚至直播类为主题的内容平台(包括并不局限于网站、Apps 等表现形式)都可以使用 YOYOW 网络构建出对应主题的内容价值平台。各平台之间，使用统一的 内容评价算法对内容进行评价。内容生产者、内容支持者、内容筛选者以及平台建设者等都将围绕 YOYOW 生态，基于用户对内容的评价来获得相应的合理的回报。",site:"https://yoyow.org/",paper:"https://yoyow.org/files/YOYOW%E7%99%BD%E7%9A%AE%E4%B9%A63.0.pdf",release:"2017-05-23",tag:"应用类Token"}}};function M(e){return e.darkModeIsActive}var x=a("123f"),B=a("bc75"),S={namespaced:!0,state:E,getters:o,mutations:x,actions:B},D={memberName:""},L={isAuthenticated:!1,memberInfo:D},R=function(e){return e.isAuthenticated},z=function(e){return e.memberInfo},X=function(e,t){e.isAuthenticated=t},W=function(e,t){e.memberInfo=t},G=(a("6b54"),a("551c"),a("06db"),function(){var e="http://localhost:8080";e="https://coin-monitor.github.io";var t="/api",a=t+"/project",o=t+"/account",n=t+"/member";return{AppUrl:e,Project:a,AccountLogin:o+"/login",MemberInfo:n+"/info",MemberLogout:n+"/logout"}}),F=a("bc3a"),K=a.n(F),U={timeout:1e4,baseURL:"https://v1.coin.offso.com/"},Y=K.a.create(U);d["a"].prototype.$axios=Y;a("bab5");var Z=G();function $(e,t){return new Promise((function(a,o){d["a"].prototype.$axios.post(Z.AccountLogin,t).then((function(t){0===t.data.code?(V(t.data.data,e),a("登陆成功")):o(t.data.message)})).catch((function(e){e.toString().indexOf("401")&&o("账号/密码不正确"),o("登陆系统异常，请稍后片刻重试")}))}))}function V(e,t){var a=e,o={memberName:"***",memberToken:a},n=6048e5;t.commit("setMemberInfo",o,n),t.commit("setIsAuthenticated",!0),d["a"].prototype.$axios.defaults.headers.common["Authorization"]="Bearer "+a}function H(e){return new Promise((function(t,a){d["a"].prototype.$axios.put(Z.MemberLogout).then((function(o){0===o.data.code?(Q(e),t()):a("退出失败，请您刷新后重试.")})).catch((function(){a("退出失败，请您刷新后重试!")}))}))}function Q(e){e.commit("setIsAuthenticated",!1),e.commit("setMemberInfo",{memberName:"",memberToken:""})}var j={namespaced:!0,state:L,getters:n,mutations:i,actions:c},J={fancyDetail:{},fancyRecommends:{},fancyPopular:[]},ee=a("6cd5");function te(e,t){e.fancyDetail[t.hash]=t}function ae(e,t){e.fancyRecommends=t}function oe(e,t){e.fancyPopular=t}var ne=a("91e8"),ie={namespaced:!0,state:J,getters:ee,mutations:s,actions:ne};d["a"].use(P["a"]);var ce=function(){var e=new P["a"].Store({modules:{setting:S,member:j,fancy:ie},strict:!1});return e},se=a("8c4f"),re=(a("7f7f"),[{path:"/",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"f241"))},children:[{path:"",name:"index",component:function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"5670"))}},{path:"project/:currency",name:"project",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"6ef9"))}},{path:"tactics",name:"tactics",component:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"0193"))}},{path:"ex",name:"ex",component:function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"c0c3"))}},{path:"chat",name:"chat",component:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"73e8"))}}]},{path:"/login",name:"login",component:function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"dc6c"))},props:function(e){return{query:e.query.name}}}]);re.push({path:"*",component:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"e51e"))}});var pe=re;d["a"].use(se["a"]);var me=function(){var e=new se["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:pe,mode:"hash",base:""});return e},le=function(){return de.apply(this,arguments)};function de(){return de=l()(p.a.mark((function e(){var t,a,o;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ce){e.next=6;break}return e.next=3,ce({Vue:d["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ce;case 7:if(t=e.t0,"function"!==typeof me){e.next=14;break}return e.next=11,me({Vue:d["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=me;case 15:return a=e.t1,t.$router=a,o={router:a,store:t,render:function(e){return e(q)}},o.el="#q-app",e.abrupt("return",{app:o,store:t,router:a});case 20:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}d["a"].prototype.$apis=G();a("4917"),a("3b2b");var fe={success:ue,failure:he,formatDate:ge,isWeChatBrowser:be,isSafariBrowser:we};function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"操作成功";w["a"].create({color:"info",position:"center",message:e,icon:"thumb_up",timeout:1100,actions:[{label:"",color:"white",handler:function(){}}]})}function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载失败";w["a"].create({color:"red-12",position:"center",message:e,icon:"report_problem",timeout:1500,actions:[{label:"",color:"white",handler:function(){}}]})}function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";e=new Date(+e),/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var o in a)if(new RegExp("(".concat(o,")")).test(t)){var n=a[o]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?n:("00"+n).substr(n.length))}return t}function be(){var e=window.navigator.userAgent.toLowerCase(),t=e.match(/MicroMessenger/i);return t&&"micromessenger"===t.toString()}function we(){var e=window.navigator.userAgent.toLowerCase();return/safari/.test(e)&&!/chrome/.test(e)}d["a"].prototype.$success=fe.success,d["a"].prototype.$failure=fe.failure,d["a"].prototype.$formatDate=fe.formatDate,d["a"].prototype.$isWeChatBrowser=fe.isWeChatBrowser,d["a"].prototype.$isSafariBrowser=fe.isSafariBrowser;a("ac6a"),a("cadf"),a("456d");var ye=q.options||q,Te="function"===typeof ye.preFetch;function Ce(e,t){var a=e?e.matched?e:t.resolve(e).route:t.currentRoute;return a?Array.prototype.concat.apply([],a.matched.map((function(e){return Object.keys(e.components).map((function(t){var a=e.components[t];return{path:e.path,c:a.options||a}}))}))):[]}function _e(e,t){e.beforeResolve((function(a,o,n){var i=Ce(a,e),c=Ce(o,e),s=!1,r=i.filter((function(e,t){return s||(s=!c[t]||c[t].c!==e.c||e.path.indexOf("/:")>-1)})).filter((function(e){return e.c&&"function"===typeof e.c.preFetch})).map((function(e){return e.c.preFetch}));if(!0===Te&&(Te=!1,r.unshift(ye.preFetch)),0===r.length)return n();var p=!1,m=function(e){p=!0,n(e)},l=function(){y["a"].stop(),!1===p&&n()};y["a"].start(),r.reduce((function(e,n){return e.then((function(){return!1===p&&n({store:t,currentRoute:a,previousRoute:o,redirect:m})}))}),Promise.resolve()).then(l).catch((function(e){console.error(e),l()}))}))}function ke(){return ve.apply(this,arguments)}function ve(){return ve=l()(p.a.mark((function e(){var t,a,o,n,i,c,s,r,m;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.app,o=t.store,n=t.router,i=!0,c=function(e){i=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),r=[void 0,void 0,void 0],m=0;case 11:if(!(!0===i&&m<r.length)){e.next=29;break}if("function"===typeof r[m]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,r[m]({app:a,router:n,store:o,Vue:d["a"],ssrContext:null,redirect:c,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:m++,e.next=11;break;case 29:if(!1!==i){e.next=31;break}return e.abrupt("return");case 31:_e(n,o),new d["a"](a);case 33:case"end":return e.stop()}}),e,null,[[14,19]])}))),ve.apply(this,arguments)}ke()},"6cd5":function(e,t){},"91e8":function(e,t){},bab5:function(e,t){},bc75:function(e,t){}},[[0,2,0]]]);