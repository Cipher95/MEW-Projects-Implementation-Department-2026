
document.addEventListener('DOMContentLoaded', () => {
	
	 // --- REPORTS DATA ---
    const reportsList = [
        
        { month: 1, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 1, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 1, user: "20XX3",  credit_spend: "30,000 نقطة"  },
	{ month: 2, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 2, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 2, user: "20XX3",  credit_spend: "30,000 نقطة"  },
	{ month: 3, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 3, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 3, user: "20XX3",  credit_spend: "30,000 نقطة"  },
	{ month: 4, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 4, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 4, user: "20XX3",  credit_spend: "30,000 نقطة"  },
	{ month: 5, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 5, user: "20XX2",  credit_spend: "30,000 نقطة"  },
	{ month: 5, user: "20XX3",  credit_spend: "30,000 نقطة"  },
	{ month: 6, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 6, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 6, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 7, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 7, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 7, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 8, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 8, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 8, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 9, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 9, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 9, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 10, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 10, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 10, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 11, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 11, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 11, user: "20XX3",  credit_spend: "0 نقطة"  },
	{ month: 12, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 12, user: "20XX2",  credit_spend: "0 نقطة"  },
	{ month: 12, user: "20XX3",  credit_spend: "0 نقطة"  }
    ];
	const total = [
        
        {month: 1, credit_spend_totally: "50,000 نقطة", total_credit:"1,000,000 نقطة" },
	{month: 2, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 3, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 4, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 5, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 6, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 7, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 8, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 9, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 10, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 11, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" },
	{month: 12, credit_spend_totally: "0 نقطة", total_credit:"0 نقطة" }
    ];
	const monthNames= [
        
        {month: 1, name: "يناير" },
	{month: 2, name: "فبراير" },
	{month: 3, name: "مارس" },
	{month: 4, name: "أبريل" },
	{month: 5, name: "مايو" },
	{month: 6, name: "يونيو" },
	{month: 7, name: "يوليو" },
	{month: 8, name: "أغسطس" },
	{month: 9, name: "سبتمبر" },
	{month: 10, name: "أكتوبر" },
	{month: 11, name: "نوفمبر" },
	{month: 12, name: "ديسمبر" }
    ];
    // --- DATA STORE ---
    const pageData = {
        home: {
            title: "مرحبا بك في مركز نظم المعلومات!",
            image: "mew_ar.svg",
            content: `
                <p>للنظر الى تقارير لرصيد الرسائل النصية اضغط على تقارير شهرية لرصيد الرسائل النصية لسنة 2026.</p>
                
            `
        },
       		reports: {
            title: "تقارير شهرية لرصيد الرسائل النصية لسنة 2026",
            image: "images.png",
            intro: ``,
            items: [
                
                {
                    id: '1st_month',
                    title: 'شهر 1',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 1)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 1)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 1)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 1)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
					`
                },{
                    id: '2nd_month',
                    title: 'شهر 2',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 2)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 2)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 2)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 2)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '3rd_month',
                    title: 'شهر 3',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 3)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 3)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 3)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 3)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '4th_month',
                    title: 'شهر 4',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 4)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 4)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 4)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 4)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '5th_month',
                    title: 'شهر 5',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 5)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 5)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 5)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 5)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '6th_month',
                    title: 'شهر 6',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 6)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 6)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 6)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 6)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '7th_month',
                    title: 'شهر 7',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 7)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 7)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 7)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 7)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '8th_month',
                    title: 'شهر 8',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 8)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 8)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 8)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 8)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '9th_month',
                    title: 'شهر 9',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 9)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 9)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 9)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 9)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '10th_month',
                    title: 'شهر 10',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 10)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 10)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 10)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 10)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '11th_month',
                    title: 'شهر 11',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 11)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 11)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 11)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 11)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },{
                    id: '12th_month',
                    title: 'شهر 12',
                    image: '',
					description: `
					<div class="table-responsive">
					${monthNames
    .filter(monthList => monthList.month === 12)
    .map(monthList => `
            <h2>${monthList.name}</h2>
    `).join('')
}
                    <table class="report-table">
                        <thead>
                            <tr>
				<th>قائمة المستخدمين</th>
				<th>الرصيد المصروف لهذا المستخدم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${reportsList
    .filter(report => report.month === 12)
    .map(report => `
        <tr>
            <td>${report.user}</td>
            <td>${report.credit_spend}</td>
        </tr>
    `).join('')
}
				<th colspan="2">إجمالي الرصيد المصروف</th>
				${total.filter(total => total.month === 12)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.credit_spend_totally}</td>
                                </tr>
                            `).join('')}
				<th colspan="2">إجمالي الرصيد المتبقي</th>
				${total.filter(total => total.month === 12)
				.map(total => `
                                <tr>
                                    <td colspan="2">${total.total_credit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

					`
                },
				
            ]
        }
    };

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const scrollToBottomBtn = document.getElementById('scroll-to-bottom-btn');

	 // --- FUNCTIONS ---

    

    /**
     * Builds and sets up the interactive content for the 'Reports' page.
     * @param {object} reportsData - The 'reports' data object from pageData.
     */
    function setupReportsPage(reportsData) {
        const displayArea = document.getElementById('reports-display-area');
        if (!displayArea || !reportsData.items || reportsData.items.length === 0) return;

        const navButtonsHTML = reportsData.items.map((item, index) =>
            `<button class="reports-nav-btn ${index === 0 ? 'active' : ''}" data-item-id="${item.id}">${item.title}</button>`
        ).join('');

        const firstItem = reportsData.items[0];

        const contentHTML = `
            <div class="reports-nav-container">
                ${navButtonsHTML}
            </div>
            <div class="reports-content-display">
                
                <div id="reports-item-description" class="reports-content-text">
                    ${firstItem.description}
                </div>
            </div>
        `;

        displayArea.innerHTML = contentHTML;

		
        const navButtons = displayArea.querySelectorAll('.reports-nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.getAttribute('data-item-id');
                const itemData = reportsData.items.find(i => i.id === itemId);
                if (!itemData) return;
			
                document.getElementById('reports-item-description').innerHTML = itemData.description;

                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

			            });
        });
    }

    
	
	
		

    function switchContent(pageKey) {
    const data = pageData[pageKey];
    if (!data) return;

    contentArea.classList.add('fade-out');

    setTimeout(() => {

        let contentHTML = '';

        // HOME PAGE
        if (pageKey === 'home') {
            contentHTML = data.content;
        }

        // REPORTS PAGE
        else if (pageKey === 'reports') {
            contentHTML = `
                <div id="reports-display-area"></div>
            `;
        }

        const html = `
            <div class="content-wrapper">
				<div class="content-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
				
                <div class="content-text">
                    <h2>${data.title}</h2>
                    ${contentHTML}
                </div>
            </div>
        `;

        // THIS WAS MISSING
        contentArea.innerHTML = html;

        // setup interactive section
        if (pageKey === 'reports') {
            setupReportsPage(data);
        }

        contentArea.classList.remove('fade-out');

    }, 300);
}

    /**
     * Updates the clock and date display.
     */
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const timeString = now.toLocaleTimeString('ar-KW', timeOptions);
        const dateDayString = now.toLocaleDateString('ar-KW', dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }

    /**
     * Shows or hides the scroll buttons based on the user's scroll position.
     */
    function handleScrollButtons() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        if (scrollTop + clientHeight < scrollHeight - 50) {
            scrollToBottomBtn.classList.add('show');
        } else {
            scrollToBottomBtn.classList.remove('show');
        }
    }

     /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Smoothly scrolls the window to the bottom.
     */
    function scrollToBottom() {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }

       // --- EVENT LISTENERS & INITIALIZATION ---

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    
    window.addEventListener('scroll', handleScrollButtons);
    backToTopBtn.addEventListener('click', scrollToTop);
    scrollToBottomBtn.addEventListener('click', scrollToBottom);
    
    // Initialize the page
    switchContent('home');
    updateClock();
    setInterval(updateClock, 1000);
});
