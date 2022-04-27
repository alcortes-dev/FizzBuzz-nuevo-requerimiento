
class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const { score } = explorer;
        return FizzbuzzService.applyValidationInNumber(score)
    }

    static applyValidationInNumber(number){
        const score  = number;
        if(score % 3 === 0 && score % 5 === 0){
            return "FIZZBUZZ";
        }else if(score % 3 === 0){
            return "FIZZ";
        }else if( score % 5 === 0){
            return "BUZZ";
        }else{
            return score;
        }
    }
}

module.exports = FizzbuzzService;
