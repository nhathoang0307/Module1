      let size = Number(prompt('Enter size: '));
        let numbers = new Array(size);
        for(let i = 0; i < numbers.length; i++){
            let number;
            do{
                number = Number(prompt(`Enter numbers[${i}]:`))
            }
            while(Number.isNaN(number))

            numbers[i] = number;
        }
        console.lognumbers();