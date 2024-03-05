const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}

let subscription
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['Others'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies))
  }
  if (['HongKong'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /港|香港|hk|hongkong|kong kong|🇭🇰/i))
  }
  if (['China'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /浙江|徐州|杭州|济南|🇨🇳/i))
  }
  if (['TaiWan'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /台|台灣|tw|taiwan|🇹🇼/i))
  }
  if (['Japan'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /日本|東京都|jp|japan|🇯🇵/i))
  }
  if (['Singapore'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /^(?!.*(?:us)).*(新|sg|singapore|🇸🇬)/i))
  }
  if (['America'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /美|us|Oregon|unitedstates|united states|united states|🇺🇸/i))
  }
  if (['Korea'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /韩|kr|서울|Korea|🇰🇷/i))
  }
})

config.outbounds.forEach(outbound => {
  if (Array.isArray(outbound.outbounds) && outbound.outbounds.length === 0) {
    if (!compatible) {
      config.outbounds.push(compatible_outbound)
      compatible = true
    }
    outbound.outbounds.push(compatible_outbound.tag);
  }
});

$content = JSON.stringify(config, null, 2)

function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}