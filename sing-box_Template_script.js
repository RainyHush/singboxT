
const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}

let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['Auto'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /香港|日本|台湾|新加坡|韩国|美国|阿根廷|英国|波兰|土耳其|伊拉克|乌克兰|芬兰|俄罗斯|泰国|浙江|徐州|广州|鞍山|襄阳|武汉|杭州|济南/i.test(p.tag))
      .map(p => p.tag))
  }
	if (['其他'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => !/香港|hk|HK|Hong Kong|浙江|徐州|广州|武汉|襄阳|鞍山|杭州|济南|台湾|tw|TW|TaiWan|日本|jp|JP|Japan|新加坡|狮城|sg|SG|Singapore|美国|us|US|America|united states|德国|de|DE|Germany|韩国|kr|KR|Korea/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['香港'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /香港|hk|HK|Hong Kong/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['中国'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /浙江|徐州|广州|鞍山|襄阳|武汉|杭州|济南/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['台湾'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /台湾|tw|TW|TaiWan/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['日本'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /日本|jp|JP|Japan/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['狮城'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /新加坡|狮城|sg|SG|Singapore/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['美国'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /美国|us|US|America|united states/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['韩国'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /韩国|kr|KR|Korea/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['德国'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /德国|de|DE|Germany/i.test(p.tag))
			.map(p => p.tag))
	}
})


$content = JSON.stringify(config, null, 2)


function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}