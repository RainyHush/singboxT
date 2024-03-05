
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name: '总订阅',
  type: 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['Others'].includes(i.tag)) {
  i.outbounds.push(...proxies.filter(p => !/港|香港|hk|hongkong|kong kong|🇨🇳|济南|杭州|徐州|浙江|🇯🇵|日本|東京|jp|Japan|🇭🇰|台|台灣|tw|taiwan|🇹🇼|新|sg|singapore|🇸🇬|美|us|Oregon|Oregon|unitedstates|united states|united states|🇺🇸|韩|kr|서울|Korea|🇰🇷/i.test(p.tag)).map(p => p.tag))
}

  if (['HongKong'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /港|香港|hk|hongkong|kong kong|🇭🇰/i.test(p.tag)).map(p => p.tag))
  }
  if (['China'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /浙江|徐州|杭州|济南|🇨🇳/i.test(p.tag)).map(p => p.tag))
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
    i.outbounds.push(...proxies.filter(p => /美国|🇺🇸|us|Oregon|united states/i.test(p.tag)).map(p => p.tag))
  }
  if (['Korea'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /韩|kr|서울|Korea|🇰🇷/i.test(p.tag)).map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)
