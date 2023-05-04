<?php
/**
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver;

use Magento\Framework\GraphQl\Query\ResolverInterface;

class EditQuestion implements ResolverInterface
{
    private $questionRepository;

    public function __construct(
        \Tigren\CustomerQuestion\Model\TigrenCustomerQuestion $questionRepository
    ) {
        $this->questionRepository = $questionRepository;
    }

    public function resolve(
        \Magento\Framework\GraphQl\Config\Element\Field $field,
        $context,
        \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {

        $input = $args['input'];
        $questionId = $input['id'];


        $question = $this->questionRepository->load($questionId);
        $question->setData($input);
        $question->save();

        return [
            'message' => __('Question updated successfully')
        ];

    }
}
