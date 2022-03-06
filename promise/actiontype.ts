type ResolveType = (value: any) => any;
type RejectType = (value: any) => any;

type Executor = (resolve: RejectType, reject: RejectType) => void;


export {ResolveType, RejectType, Executor}