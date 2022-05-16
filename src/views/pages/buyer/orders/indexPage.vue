<template>
    <div>
        <!-- <h2>User Dashboard</h2> -->
        <!-- Analytics  -->
        <section class="mt-4 analytics">
            <div class="price--options-1 price--options">
                <h1>
                    45
                </h1>
                <h6>Total Transactions</h6>
            </div>
             <div class="price--options-2 price--options">
                <h1>
                    45
                </h1>
                <h6>Pending Transactions</h6>
            </div>
             <div class="price--options-3 price--options">
                <h1>
                    45
                </h1>
                <h6>Completed Transactions</h6>
            </div>
             <div class="price--options-4 price--options">
                <h1>
                    45
                </h1>
                <h6>Cancelled Transactions</h6>
            </div>
        </section>

        <!-- Transactions Table  -->
        <section class="mt-4">
            <h3 class="text-bold">Recent Transactions</h3>
             <div class="mt-4 other--tables bg-white p-3 rounded-lg shadow-sm">
                     <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Package</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                    <td>EF34152645</td>
                                     <td>Mug</td>
                                     <td>Bronze</td>
                                    <td>&#8358;230,000</td>
                                    <td>24/12/2022</td>
                                    <td> <span class="cancelled">Cancelled</span> </td>
                                    <td> <button class="view-more-button">View More</button> </td>
                                </tr>
                                <tr>
                                      <td>EF34152645</td>
                                     <td>Mug</td>
                                     <td>Bronze</td>
                                    <td>&#8358;230,000</td>
                                    <td>24/12/2022</td>
                                    <td> <span class="completed">Completed</span> </td>
                                    <td> <button class="view-more-button">View More</button> </td>
                                </tr>
                                <tr>
                                      <td>EF34152645</td>
                                     <td>Mug</td>
                                     <td>Bronze</td>
                                    <td>&#8358;230,000</td>
                                    <td>24/12/2022</td>
                                    <td> <span class="pending">Pending</span> </td>
                                    <td> <button class="view-more-button">View More</button> </td>
                                </tr>
                                <tr>
                                     <td>EF34152645</td>
                                     <td>Mug</td>
                                     <td>Bronze</td>
                                    <td>&#8358;230,000</td>
                                    <td>24/12/2022</td>
                                    <td> <span class="cancelled">Cancelled</span> </td>
                                    <td> <button class="view-more-button">View More</button> </td>
                                </tr>
                                <tr>
                                     <td>EF34152645</td>
                                     <td>Mug</td>
                                     <td>Bronze</td>
                                    <td>&#8358;230,000</td>
                                    <td>24/12/2022</td>
                                    <td> <span class="cancelled">Cancelled</span> </td>
                                    <td> <button class="view-more-button">View More</button> </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                </div>
        </section>
    </div>
</template>