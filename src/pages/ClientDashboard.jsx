import { For, Show, createMemo, createSignal } from "solid-js";
import godrejlogo from "../assets/project-logo/dlf.png";
import birlalogo from "../assets/project-logo/godrej.png";
import prestigelogo from "../assets/project-logo/prestige.png";
import { A, } from "@solidjs/router";
export default function ClientDashboard() {
    const MIN_PRICE = 50000;
    const MAX_PRICE = 500000;

    const [minPrice, setMinPrice] = createSignal(MIN_PRICE);
    const [maxPrice, setMaxPrice] = createSignal(MAX_PRICE);

    const projects = [
        {
            id: 1,
            name: "Birla Trimaya",
            logo: birlalogo,
            location: "Bangalore",
            budget: 100000,
            type: "Residential",
            activeCampaigns: 3,
            status: "active",
            url: "/all-campaigns",
        },
        {
            id: 2,
            name: "Prestige Lakeside",
            logo: prestigelogo,
            location: "Bangalore",
            budget: 95000,
            type: "Residential",
            activeCampaigns: 2,
            status: "active",
            url: "/all-campaigns",
        },
        {
            id: 3,
            name: "Sobha Dream Acres",
            logo: birlalogo,
            location: "Bangalore",
            budget: 85000,
            type: "Residential",
            activeCampaigns: 1,
            status: "active",
            url: "/all-campaigns",
        },
        {
            id: 4,
            name: "Godrej Properties",
            logo: godrejlogo,
            location: "Bangalore",
            budget: 98000,
            type: "Residential",
            activeCampaigns: 1,
            status: "active",
            url: "/all-campaigns",
        },
        {
            id: 5,
            name: "DLF Luxury Homes",
            logo: prestigelogo,
            location: "Bangalore",
            budget: 90000,
            type: "Residential",
            activeCampaigns: 1,
            status: "active",
            url: "/all-campaigns",
        },
        {
            id: 6,
            name: "Brigade Orchards",
            logo: birlalogo,
            location: "Bangalore",
            budget: 92000,
            type: "Residential",
            activeCampaigns: 1,
            status: "active",
            url: "/all-campaigns",
        },
    ];

    const filteredProjects = createMemo(() =>
        projects.filter(
            (p) =>
                p.status === "active" &&
                p.budget >= minPrice() &&
                p.budget <= maxPrice()
        )
    );



    return (
        <section class="w-full px-4 sm:px-6 lg:px-8 py-6">

            {/* Section Header */}
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Active Projects
                    </h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        All projects with live marketing campaigns
                    </p>
                </div>

                {/* Price Filter */}
                <div class="mb-6 rounded-xl p-4  w-[400px]">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Filter by Budget
                    </h3>

                    {/* Selected Range */}
                    <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>₹ {minPrice().toLocaleString("en-IN")}</span>
                        <span>₹ {maxPrice().toLocaleString("en-IN")}</span>
                    </div>

                    {/* Sliders */}
                    <div class="relative h-6">
                        {/* Min Range */}
                        <input
                            type="range"
                            min={MIN_PRICE}
                            max={MAX_PRICE}
                            value={minPrice()}
                            onInput={(e) => setMinPrice(Math.min(+e.target.value, maxPrice() - 1000))}
                            class="absolute w-full h-1 bg-green-500 appearance-none pointer-events-auto accent-green-600"
                        />

                        {/* Max Range */}
                        <input
                            type="range"
                            min={MIN_PRICE}
                            max={MAX_PRICE}
                            value={maxPrice()}
                            onInput={(e) => setMaxPrice(Math.max(+e.target.value, minPrice() + 1000))}
                            class="absolute w-full h-1 bg-green-500 appearance-none pointer-events-auto accent-green-600"
                        />
                    </div>
                </div>


                {/* <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {activeProjects().length} Active
                </div> */}
            </div>

            {/* Projects Grid */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <For each={filteredProjects()}>
                    {(project) => (
                        <div
                            class="
                                group rounded-xl border border-gray-200 dark:border-gray-700
                                bg-white dark:bg-gray-900
                                p-4 transition-all duration-300 shadow-md
                                hover:shadow-lg hover:-translate-y-1
                                "
                        >

                            {/* Header */}
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-3">

                                    {/* Project Logo */}

                                    <div
                                        class="
                                            h-12 w-12 rounded-lg
                                            flex items-center justify-center
                                            bg-gray-100 
                                            shadow-sm
                                        "
                                    >
                                        <img
                                            src={project.logo}
                                            alt={project.name}
                                            class=" object-cover"
                                        />
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100">
                                            {project.name}
                                        </h3>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">
                                            Property Type · {project.type}
                                        </p>
                                    </div>
                                </div>

                                {/* Status */}
                                <span class="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
                                    <span class="h-2 w-2 rounded-full bg-green-500"></span>
                                    Active
                                </span>
                            </div>

                            {/* Location */}
                            <div class="flex justify-between">
                                <p class="mt-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {project.location}
                                </p>
                                <p class="mt-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">

                                    ₹ {project.budget.toLocaleString("en-IN")}
                                </p>
                            </div>

                            {/* Divider */}
                            <div class="my-4 border-t border-gray-200 dark:border-gray-700"></div>

                            {/* Campaign Stats */}
                            <div class="grid grid-cols-2 gap-4 text-sm ">
                                <div class="bg-green-50 dark:bg-gray-800 rounded-lg p-3">
                                    <p class="text-sm text-green-700 dark:text-green-500">
                                        Active Campaigns
                                    </p>
                                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                                        {project.activeCampaigns}
                                    </p>
                                </div>

                                <div class="bg-red-50 dark:bg-gray-800 rounded-lg p-3">
                                    <p class="text-sm text-red-500">
                                        Paused Campaigns
                                    </p>
                                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                                        {project.pausedCampaigns}
                                    </p>
                                </div>
                            </div>

                            {/* Footer CTA */}

                            {/* Footer CTA */}
                            <A
                                href={project.url}
                                class="
                                        mt-4 w-full
                                        text-primary-600 dark:text-primary-400
                                        hover:text-primary-700 dark:hover:text-primary-300
                                        font-medium text-sm
                                        flex items-center justify-center gap-1
                                    "
                            >
                                View Details
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </A>
                        </div>
                    )}
                </For>
            </div>


            {/* Empty State */}
            <Show when={filteredProjects().length === 0}>
                <div class="mt-8 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 p-6 text-center">
                    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                        No active projects found
                    </p>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Your live projects will appear here once campaigns are started
                    </p>
                </div>
            </Show>
        </section>
    );
}

