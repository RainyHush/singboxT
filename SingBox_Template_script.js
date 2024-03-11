
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name: '组合订阅',
  type: 'collection',//collection or subscription
  platform: 'sing-box',
  produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['Others'].includes(i.tag)) {
  i.outbounds.push(...proxies.filter(p => !/港|香港|hk|Hong Kong|HK|🇨🇳|济南|杭州|鞍山|广州|徐州|浙江|🇯🇵|日本|東京|jp|Japan|🇭🇰|台|台灣|tw|taiwan|🇹🇼|新|sg|singapore|🇸🇬|美|us|America|Oregon|unitedstates|united states|united states|🇺🇸|韩|kr|서울|Korea|🇰🇷/i.test(p.tag)).map(p => p.tag))
  }
  if (['Hong Kong'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /港|香港|hk|Hong Kong|HK|🇭🇰/i.test(p.tag)).map(p => p.tag))
  }
  if (['China'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /浙江|徐州|广州|鞍山|杭州|济南|🇨🇳/i.test(p.tag)).map(p => p.tag))
  }
  if (['TaiWan'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /台|台灣|tw|taiwan|🇹🇼/i.test(p.tag)).map(p => p.tag))
  }
  if (['Japan'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /日本|東京都|jp|japan|🇯🇵/i.test(p.tag)).map(p => p.tag))
  }
  if (['Singapore'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /^(?!.*(?:us)).*(新|sg|singapore|🇸🇬)/i.test(p.tag)).map(p => p.tag))
  }
  if (['America'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /美国|🇺🇸|us|America|Oregon|united states/i.test(p.tag)).map(p => p.tag))
  }
  if (['Korea'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /韩|kr|서울|Korea|🇰🇷/i.test(p.tag)).map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)