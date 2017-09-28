export const FETCH_PARTNERS = 'FETCH_PARTNERS';
export const FETCH_SEASONS = 'FETCH_SEASONS';

export function fetchPartners() {
    const values = [];
    values.push({"value": "FOOTLCKRUS832O", "label": "FOOTLCKRUS832O"});
    values.push({"value": "SNIPESXXEUPRIO", "label": "SNIPESXXEUPRIO"});

    return {
        type: FETCH_PARTNERS,
        partners: values
    }
}

export function fetchSeasons() {
    const values = [];

    values.push({"value": "FA2016", "label": "FALL 2016"});
    values.push({"value": "HO2016", "label": "HOLIDAY 2016"});
    values.push({"value": "SP2017", "label": "SPRING 2017"});
    values.push({"value": "SU2017", "label": "SUMMER 2017"});


    return {
        type: FETCH_SEASONS,
        seasons: values
    }
}