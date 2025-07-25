import { create } from "zustand";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2021-7-19"),
    },
    {
        id: "e2",
        description: "A pair of trousers",
        amount: 89.99,
        date: new Date("2025-7-19"),
    },
    // {
    //     id: "e3",
    //     description: "Some bananas",
    //     amount: 5.99,
    //     date: new Date("2025-7-19"),
    // },
    // {
    //     id: "e4",
    //     description: "A book",
    //     amount: 14.99,
    //     date: new Date("2025-12-19"),
    // },
    // {
    //     id: "e5",
    //     description: "A pair of shoes",
    //     amount: 59.99,
    //     date: new Date("2025-12-19"),
    // },
    // {
    //     id: "e6",
    //     description: "A pair of trousers",
    //     amount: 89.99,
    //     date: new Date("2025-12-19"),
    // },
    // {
    //     id: "e7",
    //     description: "Some bananas",
    //     amount: 5.99,
    //     date: new Date("2025-12-19"),
    // },
    // {
    //     id: "e8",
    //     description: "A book",
    //     amount: 14.99,
    //     date: new Date("2025-7-19"),
    // },
    // {
    //     id: "e9",
    //     description: "A pair of shoes",
    //     amount: 59.99,
    //     date: new Date("2025-12-19"),
    // },
    // {
    //     id: "e10",
    //     description: "A pair of trousers",
    //     amount: 89.99,
    //     date: new Date("2025-7-19"),
    // },
    // {
    //     id: "e11",
    //     description: "Some bananas",
    //     amount: 5.99,
    //     date: new Date("2025-7-19"),
    // },
    // {
    //     id: "e12",
    //     description: "A book",
    //     amount: 14.99,
    //     date: new Date("2025-7-19"),
    // },
];

const useExpensesStore = create((set, get) => ({
    expenses: [],

    setExpense: (data) => {
        set(() => ({
            expenses: data.reverse()
        }))
    },

    addExpense: (id,{ description, amount, date }) => {
        // const newExpense = { id: Math.random().toString(), description, amount, date };
        const newExpense = { id: id, description, amount, date };

        set(() => ({
            expenses: [newExpense, ...get().expenses],
        }));
    },

    deleteExpense: (id) => {
        set(() => ({
            expenses: get().expenses.filter((expense) => expense.id !== id),
        }));
    },

    updateExpense: (id, { description, amount, date }) => {
        const expenseIndex = get().expenses.findIndex((expense) => expense.id === id);
        const expense = get().expenses[expenseIndex];
        const updatedExpense = { ...expense, description, amount, date };
        const updatedExpenses = [...get().expenses];
        updatedExpenses[expenseIndex] = updatedExpense;

        set(() => ({
            expenses: updatedExpenses,
        }));
    },
}));

export default useExpensesStore;
