"use client"

import React from "react"

import { type ReactNode, useEffect, useState, useCallback } from "react"
import { DataTable, type DataTableRowEditCompleteEvent } from "primereact/datatable"
import { Column, type ColumnEditorOptions } from "primereact/column"
import { InputText } from "primereact/inputtext"
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown"
import { Tag } from "primereact/tag"
import { InputNumber, type InputNumberValueChangeEvent } from "primereact/inputnumber"
import { MultiSelect, type MultiSelectChangeEvent } from "primereact/multiselect"
import { InputTextarea } from "primereact/inputtextarea"
import { motion, AnimatePresence } from "framer-motion"
import { Pencil, Plus, Trash2,} from "lucide-react"
import { useGetAllServicos, useUpdateServico } from "../../../service/Query/servico/ServicoQuerys"
import type { Servicos } from "../../../utils/interfaces"
import { useTheme } from "../../../global/Theme-context"
import { BarbeariaButton, BarbeariaCard } from "../../ui"
import ServicoCadastro from "./ServicoCadastro"
import { useIsMobile } from "../../../hooks/useIsMobile"

interface ColumnMeta {
  field: string
  header: string
  body?: (item: Servicos) => ReactNode
  style?: React.CSSProperties
  editor?: (options: ColumnEditorOptions) => ReactNode
  editable?: boolean
  mobileVisible?: boolean
}


const ServicoLista = () => {
  const { currentTheme: theme } = useTheme()
  const isMobile = useIsMobile()

  const { data, isLoading, isSuccess, error } = useGetAllServicos();
  const { mutateAsync: updateServico } = useUpdateServico();

  const [visibleRight, setVisibleRight] = useState(false);

  const [servicos, setServicos] = useState<Servicos[]>([])
  const [editingService, setEditingService] = useState<Servicos | null>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [statuses] = useState<{ label: string; value: boolean }[]>([
    { label: "ATIVO", value: true },
    { label: "INATIVO", value: false },
  ])
  const [generos] = useState<string[]>(["MASCULINO", "FEMININO", "UNISSEX"])
  const [categorias] = useState<string[]>(["CORTE", "COLORAÇÃO", "TRATAMENTO", "MANICURE", "PEDICURE"])

  // Funções de template e editor
  const getSeverity = useCallback((value: boolean): "success" | "danger" | null => {
    switch (value) {
      case true:
        return "success"
      case false:
        return "danger"
      default:
        return null
    }
  }, [])

  const statusBodyTemplate = useCallback(
    (rowData: Servicos) => {
      const statusLabel = rowData.ativo ? "ATIVO" : "INATIVO"
      return (
        <Tag
          value={statusLabel}
          severity={getSeverity(rowData.ativo ?? false)}
          style={{
            backgroundColor: rowData.ativo ? theme.colors.primary : "#ef4444",
            color: theme.colors.buttonText,
          }}
        />
      )
    },
    [getSeverity, theme],
  )

  const priceBodyTemplate = useCallback((rowData: Servicos) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(rowData.preco || 0)
  }, [])

  const dateBodyTemplate = useCallback((rowData: Servicos, field: keyof Servicos) => {
    const date = rowData[field] as string
    if (!date) return "-"
    return new Date(date).toLocaleDateString("pt-BR")
  }, [])

  const durationBodyTemplate = useCallback((rowData: Servicos) => {
    if (!rowData.duracaoEstimadaMinutos) return "-"
    const hours = Math.floor(rowData.duracaoEstimadaMinutos / 60)
    const minutes = rowData.duracaoEstimadaMinutos % 60
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`
  }, [])

  const produtosBodyTemplate = useCallback((rowData: Servicos) => {
    if (!rowData.produtos || rowData.produtos.length === 0) return "-"
    return rowData.produtos.join(", ")
  }, [])

  // Editores
  const textEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <InputText
          type="text"
          value={options.value || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback!(e.target.value)}
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [theme],
  )

  const textareaEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <InputTextarea
          value={options.value || ""}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => options.editorCallback!(e.target.value)}
          rows={3}
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [theme],
  )

  const statusEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <Dropdown
          value={options.value}
          options={statuses}
          onChange={(e: DropdownChangeEvent) => options.editorCallback!(e.value)}
          placeholder="Selecione um Status"
          optionLabel="label"
          optionValue="value"
          itemTemplate={(option) => <Tag value={option.label} severity={getSeverity(option.value)} />}
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [statuses, getSeverity, theme],
  )

  const generoEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <Dropdown
          value={options.value}
          options={generos}
          onChange={(e: DropdownChangeEvent) => options.editorCallback!(e.value)}
          placeholder="Selecione o Gênero"
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [generos, theme],
  )

  const categoriaEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <Dropdown
          value={options.value}
          options={categorias}
          onChange={(e: DropdownChangeEvent) => options.editorCallback!(e.value)}
          placeholder="Selecione a Categoria"
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [categorias, theme],
  )

  const priceEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <InputNumber
          value={options.value || 0}
          onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback!(e.value)}
          mode="currency"
          currency="BRL"
          locale="pt-BR"
          minFractionDigits={2}
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [theme],
  )

  const durationEditor = useCallback(
    (options: ColumnEditorOptions) => {
      return (
        <InputNumber
          value={options.value || 0}
          onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback!(e.value)}
          suffix=" min"
          min={0}
          max={480}
          style={{
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.secondary,
            color: theme.colors.text,
          }}
        />
      )
    },
    [theme],
  )
  
  // Configuração das colunas
  const columns: ColumnMeta[] = [
    {
      field: "id",
      header: "Código",
      style: { width: "80px", minWidth: "80px" },
      editable: false,
      mobileVisible: false,
    },
    {
      field: "nome",
      header: "Nome",
      style: { width: "200px", minWidth: "150px" },
      editor: textEditor,
      editable: true,
      mobileVisible: true,
    },
    {
      field: "categoria",
      header: "Categoria",
      style: { width: "150px", minWidth: "120px" },
      editor: categoriaEditor,
      editable: true,
      mobileVisible: true,
    },
    {
      field: "genero",
      header: "Gênero",
      style: { width: "120px", minWidth: "100px" },
      editor: generoEditor,
      editable: true,
      mobileVisible: false,
    },
    {
      field: "descricao",
      header: "Descrição",
      style: { width: "250px", minWidth: "200px" },
      editor: textareaEditor,
      editable: true,
      mobileVisible: false,
    },
    {
      field: "duracaoEstimadaMinutos",
      header: "Duração",
      body: durationBodyTemplate,
      editor: durationEditor,
      style: { width: "120px", minWidth: "100px" },
      editable: true,
      mobileVisible: true,
    },
    {
      field: "produtos",
      header: "Produtos",
      body: produtosBodyTemplate,
      style: { width: "200px", minWidth: "150px" },
      editable: false,
      mobileVisible: false,
    },
    {
      field: "preco",
      header: "Preço",
      body: priceBodyTemplate,
      editor: priceEditor,
      style: { width: "120px", minWidth: "100px" },
      editable: true,
      mobileVisible: true,
    },
    {
      field: "ativo",
      header: "Status",
      body: statusBodyTemplate,
      editor: statusEditor,
      style: { width: "100px", minWidth: "80px" },
      editable: true,
      mobileVisible: true,
    },
    {
      field: "dtCriacao",
      header: "Data Cadastro",
      body: (rowData) => dateBodyTemplate(rowData, "dtCriacao"),
      style: { width: "130px", minWidth: "120px" },
      editable: false,
      mobileVisible: false,
    },
    {
      field: "dtAtualizacao",
      header: "Data Atualização",
      body: (rowData) => dateBodyTemplate(rowData, "dtAtualizacao"),
      style: { width: "140px", minWidth: "130px" },
      editable: false,
      mobileVisible: false,
    },
  ]

  const onColumnToggle = useCallback(
    (event: MultiSelectChangeEvent) => {
      const selectedColumns = event.value as ColumnMeta[]
      const orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field))
      setVisibleColumns(orderedSelectedColumns)
    },
    [columns],
  )

  const [visibleColumns, setVisibleColumns] = useState<ColumnMeta[]>(
    columns.filter((col) =>
      isMobile ? col.mobileVisible : ["nome", "categoria", "preco", "ativo"].includes(col.field),
    ),
  )

  useEffect(() => {
    if (isSuccess && data?.dados) {
      setServicos(data.dados)
    }
  }, [data, isSuccess])

  useEffect(() => {
    // Ajustar colunas visíveis baseado no dispositivo
    if (isMobile) {
      setVisibleColumns(columns.filter((col) => col.mobileVisible))
    } else {
      setVisibleColumns(columns.filter((col) => ["nome", "categoria", "preco", "ativo"].includes(col.field)))
    }
  }, [isMobile])

  const onRowEditComplete = useCallback(
    (e: DataTableRowEditCompleteEvent) => {
      const updatedServicos = [...servicos]
      const { newData, index } = e

      if (newData.nome && newData.nome.trim() === "") {
        return
      }

      updatedServicos[index] = newData as Servicos
      setServicos(updatedServicos)
      updateServico(newData as Servicos)
    },
    [servicos, updateServico],
  )

  const handleMobileEdit = (servico: Servicos) => {
    setEditingService({ ...servico })
    setShowEditDialog(true)
  }

  const handleSaveMobileEdit = async () => {
    if (editingService) {
      const updatedServicos = servicos.map((s) => (s.id === editingService.id ? editingService : s))
      setServicos(updatedServicos)
      await updateServico(editingService)
      setShowEditDialog(false)
      setEditingService(null)
    }
  }

  const allowEdit = useCallback((rowData: Servicos) => {
    return rowData.ativo !== false
  }, [])

  // Componente de Card para Mobile
  const MobileServiceCard = ({ servico }: { servico: Servicos }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
      
       <BarbeariaCard disabled variant="glass" fullWidth>
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
              >
                {servico.nome}
              </h3>
              <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>
                {servico.categoria}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {statusBodyTemplate(servico)}
              {/* <Button
                icon={<Edit size={16} />}
                className="p-button-text p-button-sm"
                onClick={() => handleMobileEdit(servico)}
                style={{ color: theme.colors.primary }}
              /> */}

            <BarbeariaButton 
                onClick={() => handleMobileEdit(servico)} 
                iconOnly 
                leftIcon={<Pencil size={16} />} 
                variant="outline"
            />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span style={{ color: theme.colors.textSecondary }}>Preço:</span>
              <p className="font-medium" style={{ color: theme.colors.text }}>
                {priceBodyTemplate(servico)}
              </p>
            </div>
            <div>
              <span style={{ color: theme.colors.textSecondary }}>Duração:</span>
              <p className="font-medium" style={{ color: theme.colors.text }}>
                {durationBodyTemplate(servico)}
              </p>
            </div>
            {servico.genero && (
              <div>
                <span style={{ color: theme.colors.textSecondary }}>Gênero:</span>
                <p className="font-medium" style={{ color: theme.colors.text }}>
                  {servico.genero}
                </p>
              </div>
            )}
            {servico.descricao && (
              <div className="col-span-2">
                <span style={{ color: theme.colors.textSecondary }}>Descrição:</span>
                <p className="font-medium" style={{ color: theme.colors.text }}>
                  {servico.descricao}
                </p>
              </div>
            )}
          </div>
        </div>
       </BarbeariaCard>
      
      {/* <Card
        style={{
          backgroundColor: theme.colors.cardBackground,
          borderColor: `${theme.colors.secondary}30`,
          color: theme.colors.text,
        }}
      >

      </Card> */}
    </motion.div>
  )

  const header = (
    <div className="">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold" style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}>
                Lista de Serviços
            </h2>
        </div>
        <div className="flex flex-row justify-between items-center mb-4">
            <BarbeariaButton leftIcon={<Plus />} onClick={()=> {onOpen(null)}} rounded="full" size="sm">Novo Servico</BarbeariaButton>
            {!isMobile && (
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
            )}
        </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
          style={{ borderColor: theme.colors.primary }}
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.primary }}>
            Erro ao carregar serviços
          </h3>
          <p style={{ color: theme.colors.textSecondary }}>Tente novamente mais tarde</p>
        </div>
      </div>
    )
  }

  const detalhesServico = (servico: Servicos| null) => {
    setEditingService(servico)
    setVisibleRight(true)
  }

  const actionBodyTemplate = (rowData: Servicos) => {
        return (
                <div className="flex gap-2">
                    <BarbeariaButton 
                        iconOnly 
                        leftIcon={<Pencil />} 
                        variant="outline" 
                        size="sm"
                        onClick={()=>onOpen(rowData)}
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

  const onClose = () =>{
    setEditingService(null);
    setVisibleRight(false);
  }

  const onOpen = (servico: Servicos | null ) =>{
    setEditingService(servico)
    setVisibleRight(true)
  }

  return (
    <div style={{ backgroundColor: theme.colors.background, minHeight: "100vh" }}>
      {header}

      {isMobile ? (
        // Layout Mobile - Cards
        <div className="">
          <AnimatePresence>
            {servicos.map((servico) => (
              <MobileServiceCard key={servico.id} servico={servico} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        // Layout Desktop - Tabela
        <div className="card p-fluid">
          <DataTable
            value={servicos}
            editMode="row"
            dataKey="id"
            onRowEditComplete={onRowEditComplete}
            tableStyle={{ minWidth: "50rem" }}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            className="p-datatable-sm"
            emptyMessage="Nenhum serviço encontrado"
            loading={isLoading}
            style={{
              backgroundColor: theme.colors.cardBackground,
              color: theme.colors.text,
            }}
          >
            {visibleColumns.map((col) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                body={col.body}
                editor={col.editable ? col.editor : undefined}
                style={col.style}
                filter
              />
            ))}
            <Column
              rowEditor={allowEdit}
              headerStyle={{ width: "10%", minWidth: "8rem" }}
              bodyStyle={{ textAlign: "center" }}
              header="Ações"
              body={actionBodyTemplate}
            />
          </DataTable>
        </div>
      )}

      {/* Dialog de Edição Mobile */}
      {/* <Dialog
        header="Editar Serviço"
        visible={showEditDialog}
        onHide={() => setShowEditDialog(false)}
        style={{ width: "95vw", maxWidth: "500px" }}
        contentStyle={{
          backgroundColor: theme.colors.cardBackground,
          color: theme.colors.text,
        }}
        headerStyle={{
          backgroundColor: theme.colors.cardBackground,
          color: theme.colors.text,
          borderBottom: `1px solid ${theme.colors.secondary}30`,
        }}
      >
        {editingService && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Nome
              </label>
              <InputText
                value={editingService.nome}
                onChange={(e) => setEditingService({ ...editingService, nome: e.target.value })}
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Categoria
              </label>
              <Dropdown
                value={editingService.categoria}
                options={categorias}
                onChange={(e) => setEditingService({ ...editingService, categoria: e.value })}
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Gênero
              </label>
              <Dropdown
                value={editingService.genero}
                options={generos}
                onChange={(e) => setEditingService({ ...editingService, genero: e.value })}
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Preço
              </label>
              <InputNumber
                value={editingService.preco}
                onValueChange={(e) => setEditingService({ ...editingService, preco: e.value || 0 })}
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Duração (minutos)
              </label>
              <InputNumber
                value={editingService.duracaoEstimadaMinutos}
                onValueChange={(e) => setEditingService({ ...editingService, duracaoEstimadaMinutos: e.value || 0 })}
                suffix=" min"
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Descrição
              </label>
              <InputTextarea
                value={editingService.descricao}
                onChange={(e) => setEditingService({ ...editingService, descricao: e.target.value })}
                rows={3}
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text }}>
                Status
              </label>
              <Dropdown
                value={editingService.ativo}
                options={statuses}
                onChange={(e) => setEditingService({ ...editingService, ativo: e.value })}
                optionLabel="label"
                optionValue="value"
                className="w-full"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                label="Cancelar"
                icon={<X size={16} />}
                className="p-button-secondary"
                onClick={() => setShowEditDialog(false)}
                style={{
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              />
              <Button
                label="Salvar"
                icon={<Save size={16} />}
                onClick={handleSaveMobileEdit}
                style={{
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  color: theme.colors.buttonText,
                }}
              />
            </div>
          </div>
        )}
      </Dialog> */}
            
      <ServicoCadastro detalhes={editingService} isOpen={visibleRight} onCancel={()=>{ setVisibleRight(false), setEditingService(null) }} onClose={onClose} />
    </div>
  )
}

export default ServicoLista
