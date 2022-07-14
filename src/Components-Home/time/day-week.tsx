export default function dayTyped(day: number) {
    if(day === 0){
        return 'domingo';
    }else if(day === 1){
        return 'segunda-feira';
    }else if(day === 2){
        return 'terça-feira';
    }else if(day === 3){
        return 'quarta-feira';
    }else if(day === 4){
        return 'quinta-feira';
    }else if(day === 5){
        return 'sexta-feira';
    }else if(day === 6){
        return 'Sábado';
    }
}