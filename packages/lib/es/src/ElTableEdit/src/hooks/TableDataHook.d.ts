import { TableProps } from "../../../../types/TableTypes";
export declare const dataForm: {
    tableData: any[];
};
export declare const removeList: import("vue").Ref<any[]>;
export declare const errorField: import("vue").Ref<string[]>;
export declare const errorFieldValues: import("vue").Ref<{
    fieldValue: string;
    field: string;
    message: string;
}[][]>;
export declare const formRef: import("vue").Ref<any>;
export declare const updateOperate: import("vue").Ref<string>;
export declare const editFlag: import("vue").Ref<string>;
/**
 *
 * @param props
 * @param emit
 */
export declare function dataInit(props: TableProps, emit: Function): void;
/**
 * 设置表格中字段值
 * @param index
 * @param prop
 * @param value
 */
export declare function setTableField(index: number, prop: string, value: any): void;
/**
 * 添加一行表格数据
 */
export declare function add(row: any): void;
/**
 * 添加多行表格数据
 */
export declare function addAll(rows: any[]): void;
/**
 * 根据下标删除数组一行
 * @param index
 */
export declare function remove(index: number): void;
/**
 * 根据下标删除数组多行
 * @param indexs
 */
export declare function removeAll(indexs: number[]): void;
/**
 * 根据下标设置一行状态为修改
 * @param index
 * @param isCoerce
 */
export declare function setTableRowUpdate(index: number, isCoerce?: boolean): void;
