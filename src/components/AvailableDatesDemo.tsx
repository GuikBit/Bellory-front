import React, { useState, useEffect, FunctionComponent, ReactNode } from 'react';
import { Calendar, CalendarDateTemplateEvent } from 'primereact/calendar';
import { Button } from 'primereact/button'; // NOVO: Importar o componente Button

// Importe os estilos
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

// NOVO: Definir os objetos de tema que poderiam vir do seu back-end
const temaRoxo = {
    primaryColor: '#6366f1', // Cor principal (cabeçalho)
    highlightBg: '#c7d2fe',   // Fundo da data selecionada
    highlightColor: '#1e1b4b' // Cor do texto da data selecionada
};

const temaVerde = {
    primaryColor: '#10b981',
    highlightBg: '#a7f3d0',
    highlightColor: '#064e3b'
};


const AvailableDatesDemo: FunctionComponent = () => {
    // --- Estados existentes ---
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [availableDates, setAvailableDates] = useState<Date[]>([]);

    // --- NOVO: Estado para controlar o tema atual ---
    const [currentTheme, setCurrentTheme] = useState(temaRoxo);

    useEffect(() => {
        const fetchAvailableDates = () => {
            const datesFromBackend: string[] = [
                "2025-07-10", "2025-07-15", "2025-07-18", "2025-07-19", "2025-06-24",
                // Adicionando a data de hoje para ser um dia selecionável
                new Date().toISOString().split('T')[0],
            ];
            const formattedDates: Date[] = datesFromBackend.map((dateStr: string) => new Date(dateStr + 'T00:00:00'));
            setAvailableDates(formattedDates);
        };
        fetchAvailableDates();
    }, []);

    // --- Lógica do dateTemplate (sem alterações) ---
    const dateTemplate = (dateInfo: CalendarDateTemplateEvent): ReactNode => {
        if (!dateInfo.selectable) {
            return <span style={{ textDecoration: 'line-through' }}>{dateInfo.day}</span>;
        }
        return dateInfo.day;
    }

    const handleDateChange = (e: any) => {
        setSelectedDate(e.value as Date | null);
    }

    // NOVO: Objeto de estilo que aplica o tema atual às variáveis CSS
    const themeStyle = {
        '--primary-color': currentTheme.primaryColor,
        '--highlight-bg': currentTheme.highlightBg,
        '--highlight-text-color': currentTheme.highlightColor
    } as React.CSSProperties;


    return (
        // NOVO: Div principal que aplica o tema dinâmico a tudo que está dentro
        <div style={themeStyle}>
            <div className="card flex flex-column align-items-center">
                <h3>Selecione uma data para o agendamento</h3>
                <p>Datas indisponíveis estão riscadas. O tema é dinâmico.</p>
                <Calendar
                    value={selectedDate}
                    onChange={handleDateChange}
                    enabledDates={availableDates}
                    dateTemplate={dateTemplate}
                    placeholder="Clique para ver as datas"
                    inline
                    readOnlyInput
                />
                {selectedDate && (
                    <p style={{ marginTop: '1rem' }}>
                        Data selecionada: {selectedDate.toLocaleDateString('pt-BR')}
                    </p>
                )}

                {/* NOVO: Botões para testar a troca de tema */}
                <div style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                    <h4>Teste a troca de tema:</h4>
                    <Button
                        label="Aplicar Tema Verde"
                        onClick={() => setCurrentTheme(temaVerde)}
                        className="p-button-success"
                        style={{ marginRight: '1rem' }}
                    />
                    <Button
                        label="Aplicar Tema Roxo"
                        onClick={() => setCurrentTheme(temaRoxo)}
                        className="p-button-info"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvailableDatesDemo;