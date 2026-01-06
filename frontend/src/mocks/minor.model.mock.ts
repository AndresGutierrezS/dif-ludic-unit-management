

export interface Shelter {
    id: string;
    name: string;
}

export type MinorStatus = 'ACTIVE' | 'INACTIVE' | 'RELEASED';

export type Gender = 'Man' | 'Woman'

export interface Minor {
    id: string;
    fullName: string;
    curp: string;
    birthday: string;
    placementDate: string;
    shelter: Shelter;
    status: MinorStatus;
    gender: Gender;
    autority: string;
} 



export const minorsMock: Minor[] = [
     {
    id: "1",
    fullName: "Juan Carlos Hernández López",
    curp: "HELC040315HDFRPN09",
    birthday: "2004-03-15",
    placementDate: "2021-06-10",
    shelter: {
      id: "S1",
      name: "Albergue Esperanza"
    },
    status: "ACTIVE",
    gender: "Man",
    autority: "DIF Municipal"
  },
  {
    id: "2",
    fullName: "María Fernanda Ruiz Gómez",
    curp: "RUGM050822MDFRMR08",
    birthday: "2005-08-22",
    placementDate: "2022-01-18",
    shelter: {
      id: "S2",
      name: "Casa Hogar Amanecer"
    },
    status: "ACTIVE",
    gender: 'Woman',
    autority: "DIF Municipal"
  },
  {
    id: "3",
    fullName: "Luis Ángel Torres Mendoza",
    curp: "TOML030111HDFRNS07",
    birthday: "2003-01-11",
    placementDate: "2020-09-05",
    shelter: {
      id: "S1",
      name: "Albergue Esperanza"
    },
    status: "RELEASED",
    gender: "Man",
    autority: "DIF Municipal"
  },
  {
    id: "4",
    fullName: "Diana Sofía Martínez Pérez",
    curp: "MAPD060430MDFRDN06",
    birthday: "2006-04-30",
    placementDate: "2023-02-12",
    shelter: {
      id: "S3",
      name: "Refugio Nuevo Camino"
    },
    status: "ACTIVE",
    gender: "Woman",
    autority: "DIF Municipal"
  },
  {
    id: "5",
    fullName: "José Miguel Ramírez Cruz",
    curp: "RACJ020917HDFRZS05",
    birthday: "2002-09-17",
    placementDate: "2019-11-20",
    shelter: {
      id: "S2",
      name: "Casa Hogar Amanecer"
    },
    status: "INACTIVE",
    gender: "Woman",
    autority: "DIF Municipal"
  },
  {
    id: "6",
    fullName: "Paola Andrea Castillo Vega",
    curp: "CAVP070605MDFRGL04",
    birthday: "2007-06-05",
    placementDate: "2024-01-08",
    shelter: {
      id: "S4",
      name: "Hogar San José"
    },
    status: "ACTIVE",
    gender: "Woman",
    autority: "DIF Municipal"
  },
  {
    id: "7",
    fullName: "Ricardo Iván Flores Sánchez",
    curp: "FOSR010224HDFRLV03",
    birthday: "2001-02-24",
    placementDate: "2018-07-14",
    shelter: {
      id: "S1",
      name: "Albergue Esperanza"
    },
    status: "RELEASED",
    gender: "Man",
    autority: "DIF Municipal"
  },
  {
    id: "8",
    fullName: "Natalia Belén Ortiz Navarro",
    curp: "OANN080912MDFRTT02",
    birthday: "2008-09-12",
    placementDate: "2024-03-01",
    shelter: {
      id: "S3",
      name: "Refugio Nuevo Camino"
    },
    status: "ACTIVE",
    gender: "Woman",
    autority: "DIF Municipal"
  },
  {
    id: "9",
    fullName: "Kevin Alejandro Morales Díaz",
    curp: "MODK050719HDFRKL01",
    birthday: "2005-07-19",
    placementDate: "2022-10-27",
    shelter: {
      id: "S4",
      name: "Hogar San José"
    },
    status: "INACTIVE",
    gender: "Man",
    autority: "DIF Municipal"
  },
  {
    id: "10",
    fullName: "Valeria Montserrat Pineda Salas",
    curp: "PISV060203MDFRMS00",
    birthday: "2006-02-03",
    placementDate: "2023-08-16",
    shelter: {
      id: "S2",
      name: "Casa Hogar Amanecer"
    },
    status: "ACTIVE",
    gender: "Woman",
    autority: "DIF Municipal"
  }
]