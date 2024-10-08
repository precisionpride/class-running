import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const fridgeApi = createApi({
    reducerPath: 'fridgeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_HOST,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getAllBeverages: builder.query({
            query: () => '/api/beverages/beverages/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['BeverageList'],
        }),
        getBeverage: builder.query({
            query: (item_id) => `/api/beverages/beverages/${item_id}`,
            credentials: 'include',
        }),
        deleteBeverage: builder.mutation({
            query: (item_id) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['BeverageList'],
        }),
        updateBeverage: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['BeverageList'],
        }),
        createBeverage: builder.mutation({
            query: (createData) => ({
                url: '/api/beverages/beverages',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['BeverageList'],
        }),
        getAllGrains: builder.query({
            query: () => '/api/grains/grains/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['GrainList'],
        }),
        getGrain: builder.query({
            query: (item_id) => `/api/grains/grains/${item_id}`,
            credentials: 'include',
        }),
        deleteGrain: builder.mutation({
            query: (item_id) => ({
                url: `api/grains/grains/${item_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GrainList'],
        }),
        updateGrain: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/grains/grains/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['GrainList'],
        }),

        updateBeverage: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/beverages/beverages/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['BeverageList'],
        }),
        createGrain: builder.mutation({
            query: (createData) => ({
                url: '/api/grains/grains',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['GrainList'],
        }),
        getAllDairy: builder.query({
            query: () => '/api/dairies/dairies/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['DairyList'],
        }),
        getDairy: builder.query({
            query: (item_id) => `/api/dairies/dairies/${item_id}`,
            credentials: 'include',
        }),
        deleteDairy: builder.mutation({
            query: (item_id) => ({
                url: `api/dairies/dairies/${item_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['DairyList'],
        }),
        createDairy: builder.mutation({
            query: (createData) => ({
                url: '/api/dairies/dairies',
                body: createData,
                method: 'POST',
            }),
            invalidatesTags: ['DairyList'],
        }),
        updateDairy: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/dairies/dairies/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['DairyList'],
        }),
        getAllProteins: builder.query({
            query: () => '/api/proteins/proteins/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['ProteinList'],
        }),
        getProtein: builder.query({
            query: (item_id) => `/api/proteins/proteins/${item_id}`,
            credentials: 'include',
        }),
        deleteProtein: builder.mutation({
            query: (item_id) => ({
                url: `api/proteins/proteins/${item_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ProteinList'],
        }),
        updateProtein: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/proteins/proteins/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['ProteinList'],
        }),
        createProtein: builder.mutation({
            query: (proteinData) => ({
                url: '/api/proteins/proteins',
                method: 'POST',
                body: proteinData,
            }),
            invalidatesTags: ['ProteinList'],
        }),
        getAllProduce: builder.query({
            query: () => '/api/produce/produce/mine',
            refetchOnMountOrArgChange: true,
            providesTags: ['ProduceList'],
        }),
        getProduce: builder.query({
            query: (item_id) => `/api/produce/produce/${item_id}`,
            credentials: 'include',
        }),
        deleteProduce: builder.mutation({
            query: (item_id) => ({
                url: `api/produce/produce/${item_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ProduceList'],
        }),
        updateProduce: builder.mutation({
            query: ({ item_id, updatedData }) => ({
                url: `api/produce/produce/${item_id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['ProduceList'],
        }),
        createProduce: builder.mutation({
            query: (produceData) => ({
                url: '/api/produce/produce',
                method: 'POST',
                body: produceData,
            }),
            invalidatesTags: ['ProduceList'],
        }),
    }),
})
export const {
    useGetAllBeveragesQuery,
    useGetBeverageQuery,
    useDeleteBeverageMutation,
    useUpdateBeverageMutation,
    useCreateBeverageMutation,
    useGetAllGrainsQuery,
    useGetGrainQuery,
    useDeleteGrainMutation,
    useUpdateGrainMutation,
    useCreateGrainMutation,
    useGetDairyQuery,
    useGetAllDairyQuery,
    useDeleteDairyMutation,
    useCreateDairyMutation,
    useUpdateDairyMutation,
    useDeleteProteinMutation,
    useGetAllProteinsQuery,
    useGetProteinQuery,
    useUpdateProteinMutation,
    useCreateProteinMutation,
    useDeleteProduceMutation,
    useGetAllProduceQuery,
    useGetProduceQuery,
    useUpdateProduceMutation,
    useCreateProduceMutation,
} = fridgeApi
