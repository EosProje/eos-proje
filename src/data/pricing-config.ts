export interface LODPricing {
    level: string;
    description: string;
    minRate: number; // TL per m²
    maxRate: number; // TL per m²
    avgRate: number; // TL per m²
}

export interface PricingCalculation {
    area: number;
    lodLevel: string;
    hasLaserScanning: boolean;
    sector: string;
    fieldWorkCost: number;
    modelingCost: number;
    additionalServices: number;
    subtotal: number;
    vat: number;
    total: number;
    discount?: number;
    isLimitExceeded?: boolean;
}

export const LOD_LEVELS: LODPricing[] = [
    {
        level: "100",
        description: "Kütle/hacim (konsept)",
        minRate: 40,
        maxRate: 60,
        avgRate: 50,
    },
    {
        level: "200",
        description: "Jenerik elemanlar (şematik)",
        minRate: 75,
        maxRate: 110,
        avgRate: 92.5,
    },
    {
        level: "300",
        description: "Ölçü tabanlı as-built (standart)",
        minRate: 140,
        maxRate: 190,
        avgRate: 165,
    },
    {
        level: "350",
        description: "Koordinasyon (MEP dahil)",
        minRate: 200,
        maxRate: 275,
        avgRate: 237.5,
    },
    {
        level: "400",
        description: "İmalat/shop drawing (özel)",
        minRate: 300,
        maxRate: 425,
        avgRate: 362.5,
    },
];

export const EXTRA_SERVICES = [
    { id: "drone", label: "Drone Çekimi", price: 20000, type: "fixed" },
    { id: "ortofoto", label: "Ortofoto Üretimi", price: 11500, type: "fixed" },
    { id: "animasyon", label: "Animasyon/Walkthrough Video", price: 22500, type: "fixed" },
    { id: "sapma", label: "Sapma Analizi Raporu", price: 10000, type: "fixed" },
    { id: "revizyon", label: "Revizyon Hakkı", price: 2000, type: "fixed" },
];

export const FIELD_WORK_DAILY_RATE = 40000; // TL per day
export const VAT_RATE = 0.20; // 20%
export const MAX_CALCULATION_AREA = 50000;
export const URGENCY_SURCHARGE_RATE = 0.30;

// Estimate field work days based on area
export function estimateFieldWorkDays(area: number): number {
    if (area <= 500) return 1;
    if (area <= 1000) return 2;
    if (area <= 2000) return 3;
    if (area <= 3000) return 4;
    return Math.ceil(area / 800); // ~800 m² per day
}

// Get LOD pricing by level
export function getLODPricing(lodLevel: string): LODPricing {
    return LOD_LEVELS.find((lod) => lod.level === lodLevel) || LOD_LEVELS[2]; // default to LOD 300
}

// Calculate total price
export function calculatePrice(
    area: number,
    lodLevel: string,
    hasLaserScanning: boolean,
    sector: string,
    selectedExtraIds: string[] = [],
    isUrgent: boolean = false
): PricingCalculation {
    const isLimitExceeded = area > MAX_CALCULATION_AREA;
    const lodPricing = getLODPricing(lodLevel);

    // Field work cost (only if laser scanning is selected)
    const fieldWorkDays = hasLaserScanning ? estimateFieldWorkDays(area) : 0;
    const fieldWorkCost = fieldWorkDays * FIELD_WORK_DAILY_RATE;

    // Modeling cost
    const modelingCost = area * lodPricing.avgRate;

    // Additional services (complexity factors based on sector)
    let complexityMultiplier = 1.0;
    if (sector === "restorasyon") complexityMultiplier = 1.3; // +30% for restoration
    if (sector === "endustriyel") complexityMultiplier = 1.2; // +20% for industrial

    // Calculate sum of selected extra services
    const additionalServicesAmount = selectedExtraIds.reduce((sum, id) => {
        const service = EXTRA_SERVICES.find(s => s.id === id);
        return sum + (service ? service.price : 0);
    }, 0);

    // Subtotal (base modeling + field work)
    let subtotal = (fieldWorkCost + modelingCost) * complexityMultiplier;

    // Apply Tiered Discount for area > 1500m2
    // Max 10% discount at 50,000m2 (reduced from 40% as base rates are already halved)
    let discount = 0;
    if (area > 5000) {
        const discountRate = Math.min(((area - 5000) / (MAX_CALCULATION_AREA - 5000)) * 0.1, 0.1);
        discount = subtotal * discountRate;
        subtotal -= discount;
    }

    // Add extra services to subtotal
    subtotal += additionalServicesAmount;

    // Apply Urgency Surcharge if applicable
    let urgencySurcharge = 0;
    if (isUrgent) {
        urgencySurcharge = subtotal * URGENCY_SURCHARGE_RATE;
        subtotal += urgencySurcharge;
    }

    // VAT
    const vat = subtotal * VAT_RATE;

    // Total
    const total = subtotal + vat;

    return {
        area,
        lodLevel,
        hasLaserScanning,
        sector,
        fieldWorkCost,
        modelingCost: modelingCost * complexityMultiplier,
        additionalServices: additionalServicesAmount + urgencySurcharge,
        subtotal,
        vat,
        total,
        discount,
        isLimitExceeded,
    };
}

export const SECTORS = [
    { value: "mimarlik", label: "Mimarlık" },
    { value: "renovasyon", label: "Renovasyon Projeleri" },
    { value: "insaat", label: "İnşaat & Taahhüt" },
    { value: "endustriyel", label: "Endüstriyel Tesis" },
    { value: "restorasyon", label: "Restorasyon & Kültürel Miras" },
];
