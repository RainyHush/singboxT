let config = JSON.parse($files[0])
let proxies = await produceArtifact({
	name: '组合订阅',
	type: 'collection', //collection or subscription
	platform: 'sing-box',
	produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
	if (['Others'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => !/香港|hk|HK|Hong Kong|🇭🇰|浙江|徐州|广州|鞍山|杭州|济南|🇨🇳|台湾|tw|TW|TaiWan|🇹🇼|日本|jp|JP|Japan|🇯🇵|新加坡|狮城|sg|SG|Singapore|🇸🇬|美国|us|US|America|united states|🇺🇸|阿根廷|ar|AR|Argentina|🇦🇷|德国|de|DE|Germany|🇩🇪|韩国|kr|KR|Korea|🇰🇷|英国|gb|GB|Great Britain|United Kiongdom|🇬🇧/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Hong Kong'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /香港|hk|HK|Hong Kong|🇭🇰/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['China'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /浙江|徐州|广州|鞍山|杭州|济南|🇨🇳/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['TaiWan'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /台湾|tw|TW|TaiWan|🇹🇼/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Japan'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /日本|jp|JP|Japan|🇯🇵/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Singapore'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /新加坡|狮城|sg|SG|Singapore|🇸🇬/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['America'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /美国|us|US|America|united states|🇺🇸/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Korea'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /韩国|kr|KR|Korea|🇰🇷/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Germany'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /德国|de|DE|Germany|🇩🇪/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Great Britain'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /英国|gb|GB|Great Britain|United Kiongdom|🇬🇧/i.test(p.tag))
			.map(p => p.tag))
	}
	if (['Argentina'].includes(i.tag)) {
		i.outbounds.push(...proxies.filter(p => /阿根廷|ar|AR|Argentina|🇦🇷/i.test(p.tag))
			.map(p => p.tag))
	}
})


$content = JSON.stringify(config, null, 2)