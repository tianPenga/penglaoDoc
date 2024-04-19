interface Iconfig {
    words: string,  //语句
    el: string,     //挂载元素
    times: number //循环次数
}
export default class MyWords {
    public parentElement: HTMLElement
    public wordArr1: string[]
    public wordArr2: string[]
    public times: number = 0
    constructor(config: Iconfig) {
        this.wordArr1 = config.words.match(/[\s\S]/gi)!
        // this.wordArr2 = [...this.wordArr1]
        this.wordArr2 = this.wordArr1.join('').replace(/青山/g, `前端`).split('')
        this.times = config.times
        if (typeof document !== 'undefined') {
            this.parentElement = document.querySelector(config.el)!
            this.createSpans()
            this.reDo()
        }
    }

    private async reDo() {
        for (let i = 0; i < this.times; i++) {
            await this.popSpan().then(r => this.addSpan())
        }
    }

    private createSpans() {

        this.wordArr1.forEach(word => {
            const span = document.createElement('span')
            if (word == '前' || word == '端') span.style.color = '#5468ff'
            span.innerHTML = word
            this.parentElement.insertAdjacentElement('beforeend', span)
        })

    }

    private popSpan() {
        return new Promise(res => {
            let id = setInterval(() => {
                if (this.wordArr1[this.wordArr1.length - 1]) {
                    this.wordArr1.pop()
                    this.parentElement.innerHTML = ''
                    this.createSpans()
                }
                else {
                    clearInterval(id)
                    res('ok')
                }
            }, 200)
        })
    }
    private addSpan() {
        return new Promise(res => {
            let id = setInterval(() => {
                if (this.wordArr2[this.wordArr2.length - 1]) {
                    this.wordArr1.push(this.wordArr2.shift()!)
                    this.parentElement.innerHTML = ''
                    this.createSpans()
                }
                else {
                    clearInterval(id)
                    // this.wordArr2=this.wordArr1.join('').replace(/青山/g,'前端').split('')
                    this.wordArr2 = [...this.wordArr1]
                    res('ok')
                }
            }, 200)
        })
    }
}