import ContentLoader from "react-content-loader"



const SKeleton = (props:any) => (
    <div className="text-center">
    <div className="inline-flex ">
        

  <ContentLoader 
    speed={1}
    width={1250}
    height={500}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="20" cy="82" r="21" /> 
    <rect x="51" y="60" rx="5" ry="5" width="201" height="20" /> 
    <rect x="51" y="85" rx="5" ry="5" width="201" height="20" /> 
    <rect x="0" y="120" rx="5" ry="5" width="1000" height="64" /> 
    <rect x="0" y="190" rx="5" ry="5" width="1000" height="72" /> 
    {/* <rect x="1015" y="40" rx="5" ry="5" width="244" height="174" />  */}
    <rect x="938" y="75" rx="5" ry="5" width="60" height="30" /> 
    <rect x="727" y="270" rx="5" ry="5" width="64" height="22" />
    <rect x="796" y="270" rx="5" ry="5" width="64" height="22" />
    <rect x="865" y="270" rx="5" ry="5" width="64" height="22" />
    <rect x="934" y="270" rx="5" ry="5" width="64" height="22" />

    <circle cx="20" cy="340" r="21" /> 
    <rect x="51" y="320" rx="5" ry="5" width="201" height="20" /> 
    <rect x="51" y="345" rx="5" ry="5" width="201" height="20" /> 
    <rect x="0" y="380" rx="5" ry="5" width="1000" height="64" /> 
    <rect x="0" y="450" rx="5" ry="5" width="1000" height="72" /> 
    <rect x="938" y="330" rx="5" ry="5" width="60" height="30" /> 
  </ContentLoader>
    </div>
    </div>
)


export default SKeleton