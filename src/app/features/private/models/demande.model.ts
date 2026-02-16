export enum StatusDemandeModel {
    EN_ATTENTE = "EN_ATTENTE",
    ACCEPTEE = "ACCEPTEE",
    REFUSEE = "REFUSEE"
}

export enum SpecialiteModel {
    CARDIOLOGIE = "CARDIOLOGIE",
    DERMATOLOGIE = "DERMATOLOGIE",
    PEDIATRIE = "PEDIATRIE",
    ORTHOPEDIE = "ORTHOPEDIE"
}
export interface DemandeListRvModel {
    id: number;
    dateDemande: string;
    heure : string;
    statut:StatusDemandeModel;
    specialite: SpecialiteModel;
}