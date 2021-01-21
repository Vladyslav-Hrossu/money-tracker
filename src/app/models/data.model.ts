export interface Spend {
    sum: number;
    description: string;
    category: SpendCategories;
    spender: Spenders;
    date: any;
}

export enum Spenders {
    MARINA,
    VLAD
}

export const SpendersNames = {
    [Spenders.MARINA]: 'Марина',
    [Spenders.VLAD]: 'Влад'
};

export const SpendersList = [
    { name: SpendersNames[Spenders.VLAD], value: Spenders.VLAD },
    { name: SpendersNames[Spenders.MARINA], value: Spenders.MARINA }
];

export enum SpendCategories {
    HEALTH,
    CAFFE,
    SPORT,
    COMMUNAL,
    TAXI,
    TRANSPORT,
    PETS,
    PRESENTS,
    HOME,
    FOOD,
    ENTERTAINMENT,
    CLOTHES
}

export const SpendCategoriesTitles = {
    [SpendCategories.HEALTH]: 'Здоровье',
    [SpendCategories.CAFFE]: 'Доставка',
    [SpendCategories.SPORT]: 'Спорт',
    [SpendCategories.COMMUNAL]: 'Коммуналка',
    [SpendCategories.TAXI]: 'Такси',
    [SpendCategories.TRANSPORT]: 'Транспорт',
    [SpendCategories.PETS]: 'Питомцы',
    [SpendCategories.PRESENTS]: 'Подарки',
    [SpendCategories.HOME]: 'Дом',
    [SpendCategories.FOOD]: 'Продукты',
    [SpendCategories.ENTERTAINMENT]: 'Развлечения',
    [SpendCategories.CLOTHES]: 'Одежда'
};

export const CategoriesList = [
    { value: SpendCategories.HEALTH, displayValue: SpendCategoriesTitles[SpendCategories.HEALTH]},
    { value: SpendCategories.CAFFE, displayValue: SpendCategoriesTitles[SpendCategories.CAFFE]},
    { value: SpendCategories.SPORT, displayValue: SpendCategoriesTitles[SpendCategories.SPORT]},
    { value: SpendCategories.COMMUNAL, displayValue: SpendCategoriesTitles[SpendCategories.COMMUNAL]},
    { value: SpendCategories.TAXI, displayValue: SpendCategoriesTitles[SpendCategories.TAXI]},
    { value: SpendCategories.TRANSPORT, displayValue: SpendCategoriesTitles[SpendCategories.TRANSPORT]},
    { value: SpendCategories.PETS, displayValue: SpendCategoriesTitles[SpendCategories.PETS]},
    { value: SpendCategories.PRESENTS, displayValue: SpendCategoriesTitles[SpendCategories.PRESENTS]},
    { value: SpendCategories.HOME, displayValue: SpendCategoriesTitles[SpendCategories.HOME]},
    { value: SpendCategories.FOOD, displayValue: SpendCategoriesTitles[SpendCategories.FOOD]},
    { value: SpendCategories.ENTERTAINMENT, displayValue: SpendCategoriesTitles[SpendCategories.ENTERTAINMENT]},
    { value: SpendCategories.CLOTHES, displayValue: SpendCategoriesTitles[SpendCategories.CLOTHES]}
];
