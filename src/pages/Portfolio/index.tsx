import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import React, { useEffect, useRef } from 'react'
import { galleryData } from '../../database/portfolio'

interface GalleryItem {
  imageUrl: string
  thumbnailUrl: string
  title: string
  description: string
  tags: string[]
  width: number
  height: number
}

const Portfolio: React.FC = () => {
  const galleryInstanceRef = useRef<any>(null)

  useEffect(() => {
    const initPhotoSwipeFromDOM = (gallerySelector: string) => {
      const parseThumbnailElements = (el: Element): any[] => {
        const thumbElements = el.children
        const numNodes = thumbElements.length
        const items: any[] = []

        for (let i = 0; i < numNodes; i++) {
          const figureEl = thumbElements[i] as HTMLElement

          if (figureEl.nodeType !== 1) {
            continue
          }

          const linkEl = figureEl.children[0] as HTMLElement
          const size = linkEl.getAttribute('data-size')!.split('x')

          const item: any = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          }

          if (figureEl.children.length > 1) {
            item.title = (figureEl.children[1] as HTMLElement).innerHTML
          }

          if (linkEl.children.length > 0) {
            item.msrc = (linkEl.children[0] as HTMLImageElement).getAttribute('src')
          }

          item.el = figureEl
          items.push(item)
        }

        return items
      }

      const galleryElements = document.querySelectorAll(gallerySelector)

      galleryElements.forEach((galleryElement, galleryIndex) => {
        galleryElement.setAttribute('data-pswp-uid', String(galleryIndex + 1))

        const items = parseThumbnailElements(galleryElement)

        galleryElement.addEventListener('click', (event) => {
          event.preventDefault()

          const target = event.target as HTMLElement
          const closestFigure = target.closest('figure')

          if (!closestFigure) {
            return
          }

          const index = Array.from(galleryElement.children).indexOf(closestFigure)

          if (index >= 0) {
            const options = {
              index,
              getThumbBoundsFn: (index: number) => {
                const thumbnail = galleryElement.children[index].querySelector('img') as HTMLImageElement
                const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                const rect = thumbnail.getBoundingClientRect()

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
              }
            }

            if (galleryInstanceRef.current) {
              galleryInstanceRef.current.close()
              galleryInstanceRef.current = null
            }

            galleryInstanceRef.current = new PhotoSwipe(
              document.querySelector('.pswp') as HTMLElement,
              PhotoSwipeUI_Default,
              items,
              options
            )

            galleryInstanceRef.current.init()
          }
        })
      })
    }

    initPhotoSwipeFromDOM('.my-gallery')

    return () => {
      if (galleryInstanceRef.current) {
        galleryInstanceRef.current.close()
        galleryInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section id="portfolio" className="inner inner-first portfolio">
      <div className="content__block section-grid-title">
        <p className="h2__subtitle animate-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
            />
          </svg>
          <span>Portfolio</span>
        </p>
        <h2 className="h2__title animate-in-up">Meus projetos em destaque</h2>
      </div>

      <div className="content__block grid-block">
        <div className="container-fluid px-0 inner__gallery">
          <div className="row gx-0 my-gallery" itemScope itemType="http://schema.org/ImageGallery">
            {galleryData.map((item: GalleryItem, index: number) => (
              <figure
                key={index}
                className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                itemProp="associatedMedia"
                itemScope
                itemType="http://schema.org/ImageObject"
              >
                <a
                  href={item.imageUrl}
                  data-size={`${item.width}x${item.height}`}
                  className="gallery__link"
                  itemProp="contentUrl"
                >
                  <img src={item.thumbnailUrl} className="gallery__image" itemProp="thumbnail" alt={item.title} />
                </a>
                <figcaption className="gallery__descr" itemProp="caption description">
                  <h5>{item.title}</h5>
                  <div className="card__tags d-flex flex-wrap">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="rounded-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="small">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>

              <button className="pswp__button pswp__button--close link-s" title="Close (Esc)"></button>

              <button className="pswp__button pswp__button--share link-s" title="Share"></button>

              <button className="pswp__button pswp__button--fs link-s" title="Toggle fullscreen"></button>

              <button className="pswp__button pswp__button--zoom link-s" title="Zoom in/out"></button>

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button className="pswp__button pswp__button--arrow--left link-s" title="Previous (arrow left)"></button>

            <button className="pswp__button pswp__button--arrow--right link-s" title="Next (arrow right)"></button>

            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
