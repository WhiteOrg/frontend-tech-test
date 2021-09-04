type TList = {
  items: TItems<TItem<any>>;
  render: (item: TItem<any>, index: number) => JSX.Element;
};

type TItem<T> = T;

type TItems<T> = T[];

export type { TList, TItem, TItems };
