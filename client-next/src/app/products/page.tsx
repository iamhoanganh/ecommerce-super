import productApiRequest from '@/apiRequests/product'
import Image from 'next/image';

export default async function ProductListPage() {
  const dataResponse = await (await productApiRequest.getList()).payload
  console.log("dataResponse", dataResponse);
  
  return (
    <div>
        <h3>Product List</h3>
        <div>
            {dataResponse?.products.map((item: any) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <h4>{item.price.min}</h4>
                    <Image src={item.thumb} alt={item.title} width={100} height={100} className='w-32 h-32 object-cover'/>
                </div>
            ))}
        </div>
    </div>
  )
}
