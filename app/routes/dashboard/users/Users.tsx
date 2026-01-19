import "./users.scss";
import {ColumnDirective, ColumnsDirective, GridComponent, Page,
    Inject,} from "@syncfusion/ej2-react-grids";
import {cn, formatDate} from "~/lib/utils";
import {useEffect, useState} from "react";
import {getUsers} from "/src/auth/getUsers";
import CircularIndeterminate from "~/components/CircularIndeterminate";

const Users = () => {

    const [users, setUsers] = useState<any[]>([]);
    const [lastDoc, setLastDoc] = useState<any>(null);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const pageSize = 10;

    const loadUsers = async () => {
        if (!hasMore || loading) return;

        setLoading(true);

        const res = await getUsers({
            pageSize,
            lastDoc,
        });

        setUsers(prev => {
            const newUsers = res.users.filter(
                user => !prev.find(p => p.id === user.id)
            );
            return [...prev, ...newUsers];
        });
        setLastDoc(res.lastDoc);
        setHasMore(res.hasMore);

        setLoading(false);
    };

    useEffect(() => {
        loadUsers(); // أول تحميل
    }, []);

    return (
        <div className="users">
            <div className="title-users">
                <h1>Manage Users</h1>
                <p>Filtre, sort, and access detailed user profiles</p>
            </div>

         <div className="w-full overflow-x-auto touch-pan-x max-w-full pb-4">
             <div className="min-w-[600px]">
            <GridComponent dataSource={users} gridLines="None">
               <ColumnsDirective>
                   <ColumnDirective
                       field="name"
                       headerText="Name"
                       width="150"
                       textAlign="Left"
                       template={(props: UserData) => (
                           <div className="flex items-center gap-1.5 px-4">
                               <img src={props.imageUrl} alt="users" className="rounded-full size-8 aspect-square" referrerPolicy="no-referrer"/>
                               <p>{props.name}</p>
                           </div>
                       )}
                   />

                   <ColumnDirective
                       field="email"
                       headerText="Email Address"
                       width="170"
                       textAlign="Left"
                   />
                   <ColumnDirective
                       field="createdAt"
                       headerText="Data Joined"
                       width="120"
                       textAlign="Left"
                       template={({createdAt}: { createdAt: string}) =>
                           formatDate(createdAt)}
                   />
                   <ColumnDirective
                       field="role"
                       headerText="Type"
                       width="100"
                       textAlign="Left"
                       template={({role}: UserData) => (
                           <article className={cn('status-column', role === "user" ? "bg-green-100" : "bg-red-100")}>
                               <div className={cn('size-1.5 rounded-full', role === "user" ? "bg-green-700" : "bg-red-700")} />
                                   <h3 className={cn('font-inter text-xs font-medium', role === "user" ? "text-green-900" : "text-red-950")}>
                                       {role}
                                   </h3>
                           </article>
                       )}
                   />
               </ColumnsDirective>
                <Inject services={[Page]} />
            </GridComponent>

              {hasMore && (
                  <button onClick={loadUsers} disabled={loading} className="btn-load-more">
                        {loading ? <CircularIndeterminate/> : "Load More"}
                  </button>
              )}
             </div>
         </div>
        </div>
    )
}
export default Users
