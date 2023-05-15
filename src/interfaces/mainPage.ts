export interface IVinParameters {
    [key: string]: string;
}

export interface IListNumber {
    id: string;
    value: string;
}

export interface ISetNumber {
    listNumber: IListNumber[];
}

export interface IList {
    Value: string;
    ValueId: string;
    Variable: string;
    VariableId: number;
}

export interface IListData {
    data: IList[]
}

export interface IVinData {
    id?: string;
    key: string;
    data: IList[];
}

export interface IVinDataList {
    limit?: number;
    vinData: IVinData[]
}