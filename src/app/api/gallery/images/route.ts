import { NextResponse } from 'next/server'

// Démo : mock gallery images (base de données non branchée).
const IMAGES = [
  {
    _id: 'img-01',
    title: 'Déménagement à Besançon',
    description: 'Prise en charge complète d\'un appartement en centre-ville.',
    imageUrl: 'https://i.ibb.co/FLYSvbKS/IMG-1922.jpg',
    category: 'Déménagement',
    order: 1,
    active: true,
  },
  {
    _id: 'img-02',
    title: 'Chargement soigné',
    description: 'Cartons et mobilier chargés avec sangles et calages.',
    imageUrl: 'https://i.ibb.co/fVbwGqwn/IMG-1920.jpg',
    category: 'Déménagement',
    order: 2,
    active: true,
  },
  {
    _id: 'img-03',
    title: 'Sur la route',
    description: 'Transport longue distance vers le Grand Est.',
    imageUrl: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
    category: 'Transport',
    order: 3,
    active: true,
  },
  {
    _id: 'img-04',
    title: 'Intervention professionnelle',
    description: 'Notre équipe au travail, équipement pro et manutention sécurisée.',
    imageUrl: 'https://i.ibb.co/hxnSQh8R/IMG-1932.jpg',
    category: 'Déménagement',
    order: 4,
    active: true,
  },
  {
    _id: 'img-05',
    title: 'Transfert de bureaux',
    description: 'Mobilier et matériel informatique d\'une société bisontine.',
    imageUrl: 'https://i.ibb.co/h1dSX4Mt/F9-B8-D539-68-D0-4-CBC-A50-C-F0-CBF02-CDA43.jpg',
    category: 'Professionnels',
    order: 5,
    active: true,
  },
  {
    _id: 'img-06',
    title: 'Déchargement & installation',
    description: 'Remontage du mobilier dans le nouveau logement.',
    imageUrl: 'https://i.ibb.co/jvvZ2m5y/IMG-1927.jpg',
    category: 'Déménagement',
    order: 6,
    active: true,
  },
]

export async function GET() {
  return NextResponse.json(IMAGES)
}

export async function POST() {
  return NextResponse.json({ error: 'Read-only demo' }, { status: 405 })
}
