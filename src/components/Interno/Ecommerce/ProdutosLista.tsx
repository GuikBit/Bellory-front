import { Pencil, Plus, Trash2 } from "lucide-react";
import { useTheme } from "../../../global/Theme-context";
import { useGetAllFunconarios } from "../../../service/Query/funcionario/FuncionarioQuery";
import { Produto } from "../../../utils/interfaces";
import { BarbeariaButton } from "../../ui";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";
import { Column } from "primereact/column";




const ProdutosLista = () => {
    const { currentTheme: theme } = useTheme();
    const isMobile = useIsMobile();

    const { data, isLoading, isSuccess } = useGetAllFunconarios();

    const [funcionario, setFuncionario] = useState<Produto[]>([]);

    const header = (
        <div className="">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
                    Lista de Produtos
                </h2>
            </div>
            <div className="flex flex-row justify-between items-center mb-4">
                <BarbeariaButton leftIcon={<Plus />} onClick={()=> {}} rounded="full" size="sm">Novo Funcionário</BarbeariaButton>
                {/* {!isMobile && (
                    <MultiSelect
                    value={visibleColumns}
                    options={columns}
                    optionLabel="header"
                    onChange={onColumnToggle}
                    className="w-full sm:w-20rem"
                    display="chip"
                    placeholder="Selecionar Colunas"
                    style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: theme.colors.secondary,
                        color: theme.colors.text,
                    }}
                    />
                )} */}
            </div>
        </div>
    )

      const actionBodyTemplate = () => {
        return (
            <div className="flex gap-2">
                <BarbeariaButton 
                    iconOnly 
                    leftIcon={<Pencil />} 
                    variant="outline" 
                    size="sm"
                    onClick={()=>{}}
                />
                <BarbeariaButton 
                    iconOnly 
                    leftIcon={<Trash2 />} 
                    variant="outline"
                    size="sm"
                    security=""
                    onClick={() => {}}
                />
            </div>
        );
    };

    useEffect(() => {
        if (isSuccess && data?.dados) {
            setFuncionario(data.dados);
        }
    }, [data, isSuccess])

    return(
        <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh" }}>
            {header}

            {isMobile ? (
                <div>

                </div>
            ):(
                <div className="card p-fluid">
                
                <DataTable
                    value={funcionario}
                    editMode="row"
                    dataKey="id"
                    tableStyle={{ minWidth: "50rem" }}
                    paginator
                    rows={10}
                    // rowsPerPageOptions={[5, 10, 25, 50]}
                    className="p-datatable-sm"
                    emptyMessage="Nenhum serviço encontrado!"
                    loading={isLoading}
                    style={{
                        backgroundColor: theme.colors.cardBackground,
                        color: theme.colors.text,
                    }}
                >
                    <Column field="nomeCompleto" header="Nome"></Column>
                    <Column field="email" header="E-mail"></Column>
                    <Column field="cargo" header="Cargo"></Column>
                    <Column field="ativo" header="Status"></Column>
                    <Column
                        headerStyle={{ width: "10%", minWidth: "8rem" }}
                        bodyStyle={{ textAlign: "center" }}
                        header="Ações"
                        body={actionBodyTemplate}
                    />
                </DataTable>
                
                </div>
            )}

            {/* <ColaboradoresCadastro /> */}
        </div>
    )
}

export default ProdutosLista;