import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import counter from './count';

export default () => {
    alert('Wylosowano liczbę z przedziału 1-50. Zgaduj!');
    let num = getNum();
    counter.init();
    while (num !== TO_FIND) {
        info(num, TO_FIND);
        num = getNum();
        counter.increment();
    }
    success(counter.result);
};
