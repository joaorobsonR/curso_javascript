let func = []

for(var i = 0; i < 10; i++) { //quando usa o var não é usada uma memoria
    func.push(function () {
        console.log(i)
    })
}

func[2]()
func[8]()

func = []

for(let j = 0; j < 10; j++) { //com o let o resultado é mais inteligente muda completamente
    func.push(function () {
        console.log(j)
    })
}

func[2]()
func[8]()