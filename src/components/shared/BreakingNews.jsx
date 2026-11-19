import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 mt-6'>
            <div className='flex items-center gap-4 bg-gray-200 py-4 px-3 overflow-hidden'>
                <button className='btn bg-red-500 text-white shrink-0'>
                    Latest News
                </button>
                <div className='flex-1 min-w-0 overflow-hidden'>
                    <Marquee>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor perspiciatis at quas dolore voluptatem id molestiae animi harum. Explicabo tempora, velit consequatur expedita inventore quisquam quaerat enim porro, sapiente suscipit, eveniet quas magni minus voluptas deleniti architecto animi totam? Nostrum eos perferendis quidem illum et aut eaque sint explicabo, facere modi non earum repudiandae doloribus! Repudiandae at voluptas earum obcaecati. Aliquam architecto ab aut saepe similique, eius nisi. Qui nihil officia sit mollitia ducimus quaerat. Dolorum omnis exercitationem distinctio vel amet enim inventore quidem repellendus voluptate delectus expedita accusamus, dolore ex reprehenderit? Esse commodi nemo laborum quod quibusdam! Aperiam sit dolorum hic nemo quae! Illo rem, nisi culpa error corporis officia a, reiciendis vero doloribus nesciunt non dolore quaerat possimus nihil ducimus atque ad quibusdam iste doloremque in. Voluptatem blanditiis veniam eum quis dolor aut exercitationem quidem! Sint iure in, incidunt minus beatae vitae nesciunt non similique alias. Modi officia quod quo nam vel autem ipsum fugiat, amet error laborum voluptate eaque optio nihil, tempore vitae ab suscipit labore dolorem aut soluta maxime deserunt aspernatur incidunt? Maxime numquam rerum accusamus excepturi tenetur deserunt nemo praesentium maiores sint amet. Obcaecati incidunt dolore facere dolores ad minus cupiditate, laborum ex commodi aliquid recusandae voluptatum blanditiis explicabo ratione cumque libero aspernatur. Unde recusandae sint alias saepe cupiditate sapiente reiciendis quam delectus repudiandae ab pariatur eius, laudantium excepturi quasi odio dolorem, soluta fuga dolore, autem facilis odit atque ratione tempore! Necessitatibus nesciunt animi, molestias officiis, blanditiis molestiae consectetur quis voluptate fuga, tempora eius dolorum.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
