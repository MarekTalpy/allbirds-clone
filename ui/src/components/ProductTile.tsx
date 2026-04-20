import { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlinePlus } from 'react-icons/hi2';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { chunkArray, formatPrice, isNewArrival } from '@/lib/helpers';
import type { Category, IModel, IProduct } from '@/lib/types';
import CustomButton from './ui/CustomButton';
import './ProductTile.css';

type ProductTileProps = {
  product: IProduct;
};

const CHEVRONS_ICON_SIZE = 24;
const MODELS_CHUNK_SIZE = 5;
const MODELS_CHUNKS_START_INDEX = 0;

const ProductTile = ({ product }: ProductTileProps) => {
  const defaultModel = product.models[0];
  const [selectedModelId, setSelectedModelId] = useState(defaultModel.modelId);
  const [activeModelChunkIndex, setActiveModelChunkIndex] = useState(MODELS_CHUNKS_START_INDEX);

  const selectedModel = product.models.find((model) => model.modelId === selectedModelId) ?? defaultModel;
  const modelChunks = chunkArray<IModel<Category>>(product.models, MODELS_CHUNK_SIZE);
  const shouldDisplayPrevIcon = modelChunks.length - 1 > 0 && activeModelChunkIndex > 0;
  const shouldDIsplayNextIcon = modelChunks.length > activeModelChunkIndex + 1;

  const goToPreviousChunk = () => handleModelChunksShift(-1);
  const goToNextChunk = () => handleModelChunksShift(1);

  const handleModelChunksShift = (step: number) => {
    if (!modelChunks[activeModelChunkIndex + step]) return;

    setActiveModelChunkIndex(activeModelChunkIndex + step);
  };

  return (
    <div className="product-tile">
      <div className="product-tile__image-container">
        <Link to={`/products/${selectedModelId}`}>
          <img
            className="product-tile__selected-image"
            src={selectedModel.tileImage1.src}
            alt={selectedModel.tileImage1?.desc ?? 'Image of the selected product'}
          />
        </Link>
        {isNewArrival(product.releaseDate) && <label className="product-tile__selected-image-badge">NEW</label>}
        <CustomButton
          buttonClasses={['product-tile__add-btn']}
          label="QUICK ADD"
          icon={<HiOutlinePlus size={16} strokeWidth={2} />}
        />
      </div>
      <div className="product-tile__images-row">
        {shouldDisplayPrevIcon && (
          <HiChevronLeft
            className="product-tile__chevron product-tile__chevron-left"
            onClick={goToPreviousChunk}
            size={CHEVRONS_ICON_SIZE}
          />
        )}
        <section className="product-tile__images-container">
          {modelChunks[activeModelChunkIndex].map((model) => (
            <div
              onClick={() => setSelectedModelId(model.modelId)}
              className={`product-tile__image-wrapper ${model.modelId === selectedModelId ? 'product-tile__image-wrapper--selected' : ''}`}
            >
              <img src={selectedModel?.tileImage1.src} alt={selectedModel.tileImage1.desc ?? 'Product image tile'} />
            </div>
          ))}
        </section>
        {shouldDIsplayNextIcon && (
          <HiChevronRight
            className="product-tile__chevron product-tile__chevron-right"
            onClick={goToNextChunk}
            size={CHEVRONS_ICON_SIZE}
          />
        )}
      </div>
      <div>
        <h3 className="product-tile__product-name">{product.name}</h3>
        <p className="product-tile__product-price">{formatPrice(selectedModel.price.amount)}</p>
      </div>
    </div>
  );
};

export default ProductTile;
