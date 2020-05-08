import {useMemo} from 'react';

/*
    хук для предотвращения лишнего ререндера компонента.
    принимает сам компонент, и переменную, при изменении
    которой он должен ререндериться
*/

const useMemoComponent = (component, dependence) => {
  return useMemo(() => component, [dependence]);
};

export default useMemoComponent;
