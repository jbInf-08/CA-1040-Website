document.addEventListener('DOMContentLoaded', function() {
    const educationalResources = [
        {
            title: "National Cancer Institute",
            description: "Comprehensive resource for cancer-related information",
            url: "https://www.cancer.gov/",
            category: "Government Resources"
        },
        {
            title: "American Cancer Society",
            description: "Leading organization providing cancer information and support",
            url: "https://www.cancer.org/",
            category: "Non-Profit Organizations"
        },
        {
            title: "Cancer Genome Atlas",
            description: "Comprehensive genomic datasets for various cancers",
            url: "https://www.cancergenome.nih.gov/",
            category: "Research Databases"
        },
        {
            title: "Genomics Education Programme",
            description: "Educational resources for genomics and genetics",
            url: "https://www.genomicseducation.hee.nhs.uk/",
            category: "Education Platforms"
        }
    ];

    const resourceGrid = document.getElementById('resource-grid');

    // Check if resource grid exists before attempting to populate it
    if (resourceGrid) {
        educationalResources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';

            resourceCard.innerHTML = `
                <h3>${resource.title}</h3>
                <p class="description">${resource.description}</p>
                <p class="category">Category: ${resource.category}</p>
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            `;

            resourceGrid.appendChild(resourceCard);
        });

        // Add event listeners to resource cards
        const resourceCards = document.querySelectorAll('.resource-card');
        resourceCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.backgroundColor = '#f0f0f0';
            });
            card.addEventListener('mouseout', () => {
                card.style.backgroundColor = '';
            });
        });
    } else {
        console.warn('Resource grid element not found');
    }
});